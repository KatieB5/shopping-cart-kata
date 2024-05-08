const { currentOffers } = require("../offers");

describe("offers object", () => {
  test("should return an object", () => {
    expect(typeof currentOffers).toBe("object");
    expect(Array.isArray(currentOffers)).toBe(false);
  });
  test("each product name key should have a value of type object", () => {
    for (const key in currentOffers) {
      expect(typeof currentOffers[key]).toBe("object");
      expect(Array.isArray(currentOffers[key])).toBe(false);
    }
  });
  test("each offer object should have 2 keys: product quantity and offerprice, with numbers as values", () => {
    for (const offer in currentOffers) {
      expect(currentOffers[offer]).toMatchObject({
        prodQuantity: expect.any(Number),
        offerPrice: expect.any(Number),
      });
    }
  });
});
