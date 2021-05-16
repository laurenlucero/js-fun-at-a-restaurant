const takeOrder = (order, deliveryOrders) => {
  if (deliveryOrders.length <= 2) {
    deliveryOrders.push(order);
  }
};

const refundOrder = (orderNumber, deliveryOrders) => {
  for (let i = 0; i < deliveryOrders.length; i++) {
    if (orderNumber === deliveryOrders[i].orderNumber) {
      deliveryOrders.splice(i, 1);
    }
  }
};

const listItems = (deliveryOrders) => {
  let newItems = "";
  for (let i = 0; i < deliveryOrders.length; i++) {
    if (i !== deliveryOrders.length - 1) {
      newItems = newItems + deliveryOrders[i].item + ", ";
    } else {
      newItems = newItems + deliveryOrders[i].item;
    }
  }
  return newItems;
};

const searchOrder = (deliveryOrders, item) => {
  let onMenu = false;
  for (let i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === item) {
      onMenu = true;
    }
  }
  return onMenu;
};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder,
};
