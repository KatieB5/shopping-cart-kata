const { products } = require("../productFunctions");

describe("products object", () => {
  test("should return an object", () => {
    expect(typeof products).toBe("object");
  });
  test("each product key should have a value of type number", () => {
    for (const key in products) {
      expect(typeof products[key]).toBe("number");
    }
  });
});
