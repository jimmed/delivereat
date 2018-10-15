const orders = {};

function addNewOrder(orderItems) {
  const allIds = Object.keys(orders);
  const highestId = allIds.length ? Math.max(...allIds) : 0;
  // const highestId = Math.max(...allIds) || 0;
  const newOrderId = highestId + 1;

  console.log({
    allIds,
    highestId,
    newOrderId
  })

  const order = {
    id: newOrderId,
    items: orderItems
  }

  orders[newOrderId] = order;

  console.log(orders)

  return order;
}

function getAllOrders() {
  return Object.values(orders);
}

module.exports = {
  addNewOrder,
  getAllOrders
};