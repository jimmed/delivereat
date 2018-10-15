const express = require('express');
const bodyParser = require('body-parser');

const {
  getAllMenuItems,
  getMenuItemById
} = require('./menu');

const {
  addNewOrder,
  getAllOrders
} = require('./orders');

const app = express();

app.use(bodyParser.json());
app.use('/static', express.static('static'));
app.set('view engine', 'hbs');

app.get('/', function(req, res){
  res.render('index');
});

app.get('/menu', (req, res) => {
  const menu = getAllMenuItems();
  res.json(menu);
})

app.get('/menu/:menuItemId', (req, res) => {
  const menuItem = getMenuItemById(req.params.menuItemId)
  if (menuItem) {
    res.json(menuItem)
  } else {
    res.status(404).json({ error: `There is no menu item with id ${req.params.menuItemId}`})
  }
})

app.get('/orders', (req, res) => res.json(getAllOrders()))

app.post('/orders', (req, res) => {
  const orderItems = req.body;
  const order = addNewOrder(orderItems);
  res.json(order);
})

app.listen(8080, function(){
  console.log('Listening on port 8080');
});
