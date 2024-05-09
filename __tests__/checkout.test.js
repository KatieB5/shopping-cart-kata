const shoppingCartData = require("../data-sources/data-source-1.json");
const { products } = require("../products");
const { offers } = require("../offers");
const { checkout } = require("../checkout");

describe("checkout function", () => {
  test("should take an array of objects as an argument, otherwise returns an error", () => {
    const output = checkout(shoppingCartData);
    expect(output).toBe();
  });
  xtest("should not mutate the original array or objects in the array", () => {});
  xtest("should return the subtotal of a shopping cart when given an array with 1 product", () => {});
  xtest("should return the subtotal of a shopping cart when given an array with >1 products", () => {});
  xtest("should return the subtotal of a shopping cart when given an array with >1 product and 1 associated offer", () => {});
  xtest("should return the subtotal of a shopping cart when given an array with >1 product and 2 associated offers", () => {});
  xtest("should return the subtotal of a shopping cart when a product quanitity qualifies for an offer to be applied more than once", () => {});
  xtest("should return the subtotal of a shopping cart where >1 products have a quanitity that qualifies for an offer to be applied more than once", () => {});
});
