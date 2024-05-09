const shoppingCartData = require("../data-sources/data-source-1.json");
const shoppingCartData1 = require("../data-sources/data-source-2.json");
const shoppingCartData2 = require("../data-sources/data-source-3.json");
const shoppingCartData3 = require("../data-sources/data-source-4.json");
const shoppingCartData4 = require("../data-sources/data-source-5.json");
const { checkout } = require("../checkout");

describe("checkout function", () => {
  test("should take an array of objects as an argument, otherwise returns an error", () => {
    const testData = "peanutbutter";
    const testData1 = [];
    const testData2 = [70, "hi", null];
    const testData3 = [{}, {}];

    const output = checkout(testData);
    const output1 = checkout(testData1);
    const output2 = checkout(testData2);
    const output3 = checkout(testData3);
    const output4 = checkout(shoppingCartData);

    expect(output).toBe(
      "Please make sure your data source is an array containing > 1 product object"
    );
    expect(output1).toBe(
      "Please make sure your data source is an array containing > 1 product object"
    );
    expect(output2).toBe(
      "Please make sure your data source contains product objects"
    );
    expect(output3).toBe(
      "Please make sure the objects in your data source contain products"
    );
    expect(output4).toEqual(expect.any(Number));
  });
  test("should not mutate the original array or objects in the array", () => {
    const testData = shoppingCartData;
    checkout(testData);
    expect(testData).toEqual([
      { code: "A", quantity: 1 },
      { code: "B", quantity: 1 },
      { code: "C", quantity: 1 },
      { code: "D", quantity: 2 },
    ]);
    expect(testData).toBe(shoppingCartData);
  });
  test("should return the subtotal of a shopping cart when given an array with 1 product", () => {
    const testData = [{ code: "A", quantity: 2 }];
    const output = checkout(testData);
    expect(output).toEqual(100);
  });
  test("should return the subtotal of a shopping cart when given an array with >1 products", () => {
    const testData = [
      { code: "A", quantity: 2 },
      { code: "B", quantity: 1 },
    ];
    const output = checkout(testData);
    expect(output).toEqual(135);

    const testData1 = shoppingCartData;
    const output1 = checkout(testData1);
    expect(output1).toEqual(134);
  });
  test("should return the subtotal of a shopping cart when given an array with >1 product and 1 associated offer", () => {
    const testData = [
      { code: "A", quantity: 4 },
      { code: "B", quantity: 1 },
    ];
    const output = checkout(testData);
    expect(output).toEqual(225);

    const output1 = checkout(shoppingCartData1);
    expect(output1).toEqual(274);
  });
  test("should return the subtotal of a shopping cart when given an array with >1 products with an applicable offer", () => {
    const output = checkout(shoppingCartData2);
    expect(output).toEqual(285);
  });
  test("should return the subtotal of a shopping cart when 1 product qualifies for an offer to be applied more than once", () => {
    const output = checkout(shoppingCartData3);
    expect(output).toEqual(364);
  });
  test("should return the subtotal of a shopping cart where >1 products qualify for an offer to be applied more than once", () => {
    const output = checkout(shoppingCartData4);
    expect(output).toEqual(449);
  });
});
