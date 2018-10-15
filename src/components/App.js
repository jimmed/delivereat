import React from 'react';
import Menu from './Menu';
import Basket from './Basket';

import '../styles/App.scss';

/*
 * Basket = { id: quantity }     { 1: 1, 2: 3 }
 */

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      menu: [],
      basket: {}
    }
    this.addToBasket = this.addToBasket.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
  }

  componentDidMount() {
    this.fetchMenu();
  }

  fetchMenu() {
    fetch('/menu')
      .then(response => response.json())
      .then(menu => {
        console.log(menu);
        this.setState({ menu })
      })
  }

  addToBasket(menuItem) {
    const existingQuantity = this.state.basket[menuItem.id];
    let quantity;

    if (!existingQuantity) {
      quantity = 1;
    } else {
      quantity = this.state.basket[menuItem.id] + 1;
    }

    this.setState({
      basket: Object.assign({}, this.state.basket, { [menuItem.id]: quantity })
    })
  }

  submitOrder() {
    fetch('/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.basket)
    })
      .then(response => response.json())
      .then(order => {
        alert(`Order received! Your order ID is ${order.id}`)
      })
  }

  render(){
    return (
      <div>
        <h1>Jim's breakfast place</h1>
        <Menu
          menu={this.state.menu}
          onBasketAdd={this.addToBasket}
        />
        <Basket
          menu={this.state.menu}
          basket={this.state.basket}
          submitOrder={this.submitOrder}
        />
      </div>
    )
  }
}

export default App;
