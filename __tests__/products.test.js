const { products } = require("../products");

describe("products object", () => {
  test("should return an object", () => {
    expect(typeof products).toBe("object");
    expect(Array.isArray(products)).toBe(false);
  });
  test("each product key should have a value of type number", () => {
    for (const key in products) {
      expect(typeof products[key]).toBe("number");
    }
  });
});
