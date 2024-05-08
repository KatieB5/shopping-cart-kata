const {products} = require("../products");
const {addProduct} = require('../productFunctions')

describe("addProduct function", () => {
    test('should take 2 arguments: a new product object, and the existing products object to be updated, and return a new object; otherwise should return an error', () => {
        const testNewProd1 = ["E", 70];
        const testCurrProdObj2 = [{F: 60}, {G: 90}];
        const testNewProd2 = {E: 70};
        const testNewProd3 = {E: "peanutbutter"};
        const output1 = addProduct(products, testNewProd1)
        const output2 = addProduct(testCurrProdObj2, testNewProd2)
        const output3 = addProduct(products, testNewProd3)
        const output4 = addProduct(products, testNewProd2)
        expect(output1).toEqual("Please provide a new product object")
        expect(output2).toEqual("Please provide a current products object")
        expect(output3).toEqual("Please make sure the product price is a type of number")
        expect(typeof output4).toBe("object")
        expect(typeof output4).not.toBe(products)
    });
    xtest('should not mutate the input new product object', () => {
        
    });
    xtest('should add a new product to the current products object', () => {
        
    });
});