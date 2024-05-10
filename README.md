# Shopping Cart Kata

## Introduction

This kata is a shopping cart checkout system. There are several products available, each with a price per unit. Some products have a special offer price when bought in certain quantities e.g., 4 for 120. The checkout system consumes an array of objects as a data source e.g.,`[{"code":"A","quantity":3},{"code":"B","quantity":3},{"code":"C","quantity":1},{"code":"D","quantity":2}]`, and returns the sub total when queried.

This kata was built using a test-driven-development (TDD) approach, written in JavaScript ([Node.js](https://nodejs.org/en) as runtime environment), and tested with [Jest](https://jestjs.io/) (JavaScript testing framework).

## File descriptions

### Products.js

Contains a pricing dataset: an object storing all currently avialable products and the associated price for a single unit, as key-value pairs.
- New products can be added (`addProduct()`)
- Old products can be removed (`removeProduct()`)

### Offers.js

Contains an offers dataset: an object, storing each product that currently has an offer associated with it. Product names are keys, and the associated values are objects storing the product quantity and price.
- New offers can be added (`addOffer()`)
- Old offers can be removed (`removeOffer()`)

### Checkout.js

Contains the checkout function (`checkout()`).
- Takes a array of objects as a data source, and returns the subtotal after applying any available offers 

### Data-sources folder and files

Contains example data sources (each is an array of objects), that can be consumed by the checkout function, and were used as part of unit testing.

### Tests folder and files

The __tests_ folder contains the testing files for products, productFunctions, offers, offerFunctions and checkout files.

## Get started

1. Fork and clone this repo
2. `cd` into the shopping-cart-kata folder
3. run `npm i` to install the dependancies

## Use checkout(), add/removeProduct(), add/removeOffer()
1. To use the checkout, require in the data sources you wish to test at the top of the checkout.js file e.g. 
`const dataSource = require("./data-sources/data-source-1.json")`, then invoke the checkout function with your data source as the argument e.g., `checkout(myDataSource)` or pass your data directly into the function e.g., `checkout([{ code: "A", quantity: 6 },{ code: "B", quantity: 4 },{ code: "C", quantity: 1 },{ code: "D", quantity: 2 },])`, then run `node checkout.js` in your terminal
2. To add/remove a product, invoke the function in the products.js file e.g. `addProduct({E: 68})`, `removeProduct("F")` and run `node products.js` in your terminal
3. To add/remove an offer, invoke the function in the offers.js file e.g. `addOffer({D: {prodQuantity: 4, offerPrice: 80,}})`, `removeOffer({A: {prodQuantity: 3, offerPrice: 140,}})` and run `node offers.js` in your terminal

To view the output of the function in the terminal, you can use `console.log()` e.g.,
`console.log(addProduct({E: 68}))`

## Run the tests
1. To run all test files: From the shopping-cart-kata folder, run `npm t`
2. To run an individual test file: `npm t __tests__/nameOfFileYouWantToTest.js`


