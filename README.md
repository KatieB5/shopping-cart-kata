# Shopping Cart Kata

## Introduction

This kata is a shopping cart checkout system. There are several products available, each with a price per unit. Some products have a special offer price when bought in certain quantities e.g., 4 for 120. The checkout system consumes an array of objects as a data source e.g.,[{"code":"A","quantity":3},{"code":"B","quantity":3},{"code":"C","quantity":1},{"code":"D","quantity":2}], and returns the sub total when queried.

## File description

### products.js

Contains the pricing dataset: an object storing all currently avialable products and the associated price for a single unit, as key-value pairs.
- New products can be added
- Old products can be removed

## offers.js

Contains the offers dataset: an object, storing each product that currently has an offer associated with it. Product names are keys, and the associated values are objects storing the product quantity and price.
- New offers can be added
- Old offers can be removed

### checkout.js

Contains the checkout function.
- Takes a array of objects as a data source, and returns the subtotal after applying any available offers

### Data-sources folder and files
Contains example data sources (each is an array of objects), that can be consumed by the checkout function, and were used as part of unit testing.

### Test folder and files

Contains testing files for products, offerCalculator and checkout files.

1. To run all test files: From the shopping-cart-kata folder, run `npm t`
2. To run an individual test file: `npm t __tests__/[nameOfFileYouWantToTest.js]`

## Get started

1. Fork and clone this repo
2. `cd` into the shopping-cart-kata folder
3. run `npm i` to install the dependancies

## Use the checkout, add/remove a product
1. To use the checkout,
2. To add/remove a product, invoke the function in the products.js file and run 'node products.js' in your terminal e.g.
`addProduct(products, {E: 68})`
`removeProduct(products, "F")`

To view the output of the function in the terminal, you can use `console.log()` e.g.,
`console.log(addProduct(products, {E: 68}))`
