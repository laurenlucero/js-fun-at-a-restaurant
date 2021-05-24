function createRestaurant(name) {
  return { name: name, menus: { breakfast: [], lunch: [], dinner: [] } };
}

function addMenuItem(restaurant, item) {
  if (!restaurant.menus[item.type].includes(item))
    restaurant.menus[item.type].push(item);
}

function removeMenuItem(restaurant, name, type) {
  for (let i = 0; i < restaurant.menus[type].length; i++) {
    if (restaurant.menus[type][i].name.includes(name)) {
      restaurant.menus[type].splice(name, 1);
      return `No one is eating our ${name} - it has been removed from the ${type} menu!`;
    }
  }
  return `Sorry, we don't sell ${name}, try adding a new recipe!`;
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem,
};
