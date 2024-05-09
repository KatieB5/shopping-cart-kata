let products = {
  A: 50,
  B: 35,
  C: 25,
  D: 12,
};

const addProduct = (products, newProd) => {
  if (typeof products !== "object" || Array.isArray(products)) {
    return "Please provide a current products object";
  } else if (typeof newProd !== "object" || Array.isArray(newProd)) {
    return "Please provide a new product object";
  } else if (typeof Object.values(newProd)[0] !== "number") {
    return "Please make sure the product price is a type of number";
  }

  products[Object.keys(newProd)] = Object.values(newProd)[0];

  return products;
};

const removeProduct = (products, deleteProd) => {
    if (typeof products !== "object" || Array.isArray(products)) {
        return "Please provide a current products object";
      } else if (typeof deleteProd !== "string") {
        return "Please provide the name of the product to be deleted as a string";
      } else if (!products[deleteProd]) {
        return "The product does not exist"
      }

    delete products[deleteProd];
    
    return products;
};

module.exports = { products, addProduct, removeProduct };
