function nameMenuItem(item) {
  let menuItemName = `Delicious ${item}`;
  return menuItemName;
}

function createMenuItem(name, price, type) {
  let menuItem = {
    name,
    price,
    type,
  };
  return menuItem;
}

function addIngredients(ingredient, ingredients) {
  if (!ingredients.includes(ingredient)) {
    ingredients.push(ingredient);
  }
}

function formatPrice(initialPrice) {
  let formattedPrice = `$${initialPrice}`;
  return formattedPrice;
}

function decreasePrice(price) {
  let decreasedPrice = price - 0.1 * price;
  return decreasedPrice;
}

function createRecipe(title, ingredients, menuItemType) {
  let recipe = {
    title,
    ingredients,
    type: menuItemType,
  };
  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe,
};
