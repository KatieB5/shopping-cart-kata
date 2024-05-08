const { products, addProduct, removeProduct } = require("../productFunctions");

describe("addProduct function", () => {
  test("should take 2 arguments: a new product object, and the existing products object to be updated, and return an updated object; otherwise should return an error", () => {
    const testNewProd1 = ["E", 70];
    const testCurrProdObj1 = [{ F: 60 }, { G: 90 }];
    const testNewProd2 = { E: 70 };
    const testNewProd3 = { E: "peanutbutter" };

    const output1 = addProduct(products, testNewProd1);
    const output2 = addProduct(testCurrProdObj1, testNewProd2);
    const output3 = addProduct(products, testNewProd3);
    const output4 = addProduct(products, testNewProd2);

    expect(output1).toEqual("Please provide a new product object");
    expect(output2).toEqual("Please provide a current products object");
    expect(output3).toEqual(
      "Please make sure the product price is a type of number"
    );
    expect(typeof output4).toBe("object");
    expect(typeof output4).not.toEqual(products);
  });
  test("should not mutate the input new product object", () => {
    const testNewProd = { E: 70 };

    const output = addProduct(products, testNewProd);

    expect(testNewProd).toEqual({ E: 70 });
  });
  test("should add a new product to the current products object", () => {
    const testNewProd = { E: 70 };

    const output = addProduct(products, testNewProd);

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
  test("should take 2 arguments: a string with the key/product name to be deleted, and the existing products object to be updated, and return an updated object; otherwise should return an error", () => {
    const testDeleteProd1 = 70;
    const testCurrProdObj1 = [{ F: 60 }, { G: 90 }];
    const testDeleteProd2 = "F";
    const testDeleteProd3 = "E";

    const output1 = removeProduct(testCurrProdObj1, testDeleteProd3);
    const output2 = removeProduct(products, testDeleteProd1);
    const output3 = removeProduct(products, testDeleteProd2);
    const output4 = removeProduct(products, testDeleteProd3);

    expect(output1).toEqual("Please provide a current products object");
    expect(output2).toEqual(
      "Please provide the name of the product to be deleted as a string"
    );
    expect(output3).toEqual("The product does not exist");
    expect(typeof output4).toBe("object");
    expect(typeof output4).not.toEqual(products);
  });
  test("should return an updated object with the corresponding key/value pair deleted", () => {
    const testDeleteProd = "E";
    addProduct(products, { E: 70 });

    const output = removeProduct(products, testDeleteProd);

    expect(output).toEqual({
      A: 50,
      B: 35,
      C: 25,
      D: 12,
    });
  });
});
