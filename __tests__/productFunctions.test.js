const { products, addProduct, removeProduct } = require("../products");

describe("addProduct function", () => {
  test("should take an arguments: a new product object, and return an updated object; otherwise should return an error", () => {
    const testNewProd1 = ["E", 70];
    const testNewProd2 = { E: 70 };
    const testNewProd3 = { E: "peanutbutter" };

    const output1 = addProduct(testNewProd1);
    const output2 = addProduct(testNewProd3);
    const output3 = addProduct(testNewProd2);

    expect(output1).toEqual("Please provide a new product object");
    expect(output2).toEqual(
      "Please make sure the product price is a type of number"
    );
    expect(typeof output3).toBe("object");
  });
  test("should not mutate the input new product object", () => {
    const testNewProd = { E: 70 };

    addProduct(testNewProd);

    expect(testNewProd).toEqual({ E: 70 });
  });
  test("should add a new product to the current products object", () => {
    const testNewProd = { E: 70 };

    const output = addProduct(testNewProd);

    expect(output).toEqual({
      A: 50,
      B: 35,
      C: 25,
      D: 12,
      E: 70,
    });
  });
});

describe("removeProduct function", () => {
  test("should take 1 argument: a string with the key/product name to be deleted, and return an updated object; otherwise should return an error", () => {
    const testDeleteProd1 = 70;
    const testDeleteProd2 = "F";
    const testDeleteProd3 = "E";

    const output1 = removeProduct(testDeleteProd1);
    const output2 = removeProduct(testDeleteProd2);
    const output3 = removeProduct(testDeleteProd3);

    expect(output1).toEqual(
      "Please provide the name of the product to be deleted as a string"
    );
    expect(output2).toEqual("The product does not exist");
    expect(typeof output3).toBe("object");
  });
  test("should return an updated object with the corresponding key/value pair deleted", () => {
    const testDeleteProd = "E";
    addProduct({ E: 70 });

    const output = removeProduct(testDeleteProd);

    expect(output).toEqual({
      A: 50,
      B: 35,
      C: 25,
      D: 12,
    });
  });
});
