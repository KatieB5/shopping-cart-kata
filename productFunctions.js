const { products } = require("./products");

const addProduct = (currProdObj, newProd) => {
    if (typeof currProdObj !== "object" || Array.isArray(currProdObj)) {
        return "Please provide a current products object";
    } else if (typeof newProd !== "object" || Array.isArray(newProd)) {
        return "Please provide a new product object";
    } else if (typeof newProd["key"] !== "number") {
        console.log([newProd])
        return "Please make sure the product price is a type of number";
    }

    return {...products};

};

const removeProduct = () => {

}

module.exports = {addProduct, removeProduct};