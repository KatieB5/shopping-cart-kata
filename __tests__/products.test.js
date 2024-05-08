const {products} = require("../products");

describe("products object", () => {
  test("should return an object", () => {
    expect(typeof products).toBe("object");
  });
  test("each product key should have a value of type number", () => {
    for (const key in products) {
      console.log(typeof [key]);
      expect(typeof products[key]).toBe("number");
    }
  });
});
