const { products } = require("./products");
const { currentOffers } = require("./offers");

const checkout = (shoppingCartData) => {
  if (!Array.isArray(shoppingCartData) || shoppingCartData.length === 0) {
    return "Please make sure your data source is an array containing > 1 product object";
  } else if (
    !shoppingCartData.every(function (product) {
      return typeof product === "object";
    })
  ) {
    return "Please make sure your data source contains product objects";
  } else if (
    !shoppingCartData.every(function (product) {
      return Object.keys(product).length > 0;
    })
  ) {
    return "Please make sure the objects in your data source contain products";
  }

  let total = 0;

  shoppingCartData.forEach((cartProduct) => {
    let individualProductTotal = 0;

    let productPrice = products[cartProduct["code"]];
    let cartProdQuant = cartProduct["quantity"];

    if (Object.hasOwn(currentOffers, cartProduct["code"])) {
      let offerProdQuant = currentOffers[cartProduct["code"]]["prodQuantity"];
      if (offerProdQuant <= cartProdQuant) {
        let remainder = cartProdQuant % offerProdQuant;
        let numOfcurrentOffersApplied = Math.floor(
          cartProdQuant / offerProdQuant
        );

        individualProductTotal +=
          currentOffers[cartProduct["code"]].offerPrice *
          numOfcurrentOffersApplied;

        individualProductTotal += productPrice * remainder;
      } else {
        individualProductTotal = productPrice * cartProdQuant;
      }
    } else {
      individualProductTotal = productPrice * cartProdQuant;
    }
    total += individualProductTotal;
  });
  return total;
};

module.exports = { checkout };
