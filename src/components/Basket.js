import React from 'react';

function Basket({ basket, menu, submitOrder }) {
    const total = Object.keys(basket).map(menuItemId => {
        const menuItem = menu.find(item => item.id === parseInt(menuItemId, 10));
        const quantity = basket[menuItemId];
        return quantity * menuItem.price;
    })
        .reduce((acc, item) => acc + item, 0);
    
    return (
        <section>
            <h2>My Basket</h2>
            <ul>
                {Object.keys(basket).map(menuItemId => {
                    const menuItem = menu.find(item => item.id === parseInt(menuItemId, 10));
                    const quantity = basket[menuItemId];

                    return (<li key={menuItemId}>
                        {quantity}x {menuItem.name} @£{menuItem.price} = £{quantity * menuItem.price}
                    </li>)
                })}
            </ul>
            <div>
                <strong>Total: £{total}</strong>
            </div>
            <div>
                <button type="button" onClick={submitOrder}>
                    Place order!
                </button>
            </div>
        </section>
    )
}

export default Basket;