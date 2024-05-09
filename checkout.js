const shoppingCartData = require("./data-sources/data-source-1.json");
const { products } = require("./products");
const { offers } = require("./offers");

const checkout = (shoppingCartData) => {
  if (!Array.isArray(shoppingCartData) || shoppingCartData.length === 0) {
    return "Please provide an array containing > 1 product object";
  } else if (
    shoppingCartData.every(function (product) {
      return typeof product !== "object";
    })
  ) {
  }

  return 0;
};

module.exports = { checkout };
