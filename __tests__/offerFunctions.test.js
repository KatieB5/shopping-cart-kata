const { addOffer, currentOffers } = require("../offers");

describe("addOffer function", () => {
  test("should take anewOffer object as an argument; otherwise provides an error message", () => {
    const testNewOffer = [
      {
        C: {
          prodQuantity: 3,
          offerPrice: 140,
        },
      },
    ];
    const testNewOffer1 = "{A: {prodQuantity: 3, offerPrice: 140}}";

    const output = addOffer(testNewOffer);
    const output1 = addOffer(testNewOffer1);

    expect(output).toBe("Please provide a newOffer as an object data type");
    expect(output1).toBe("Please provide a newOffer as an object data type");
  });
  test("should take a newOffer object with 2 properties: prodQuantity and offerPrice; otherwise provides an error message", () => {
    const testNewOffer = {
      C: {
        peanutbutter: 4,
        offerPrice: 80,
      },
    };
    const testNewOffer1 = {
      C: {
        prodQuantity: 4,
        peanutbutter: 80,
      },
    };

    const output = addOffer(testNewOffer);
    const output1 = addOffer(testNewOffer1);

    expect(output).toBe(
      "Please provide a newOffer object with a prodQuantity and an offerPrice property"
    );
    expect(output1).toBe(
      "Please provide a newOffer object with a prodQuantity and an offerPrice property"
    );
  });
  test("should take a newOffer object with 2 properties, each with a value of datatype 'number'; otherwise provides an error message", () => {
    const testNewOffer = {
      C: {
        prodQuantity: "4",
        offerPrice: 80,
      },
    };
    const testNewOffer1 = {
      C: {
        prodQuantity: 4,
        offerPrice: null,
      },
    };

    const output = addOffer(testNewOffer);
    const output1 = addOffer(testNewOffer1);

    expect(output).toBe(
      "Please provide a newOffer object with values of data type 'number' for prodQuantity and an offerPrice property"
    );
    expect(output1).toBe(
      "Please provide a newOffer object with values of data type 'number' for prodQuantity and an offerPrice property"
    );
  });
  test("should not add duplicate offers to the currentOffers object; provides an error message if someone tries to add duplicate offers", () => {
    const testNewOffer = {
      A: {
        prodQuantity: 3,
        offerPrice: 140,
      },
    };
    const output = addOffer(testNewOffer);
    expect(output).toBe(
      "The offer provided already exists; please provide a unique newOffer"
    );
  });
  test("should add a newOffer to the currentOffers object", () => {
    const testNewOffer = {
      C: {
        prodQuantity: 4,
        offerPrice: 80,
      },
    };
    const output = addOffer(testNewOffer);
    expect(output).toEqual({
      A: {
        prodQuantity: 3,
        offerPrice: 140,
      },
      B: {
        prodQuantity: 2,
        offerPrice: 60,
      },
      C: {
        prodQuantity: 4,
        offerPrice: 80,
      },
    });
  });
  test("should not mutate the input newOffer object", () => {
    const testNewOffer = {
      D: {
        prodQuantity: 4,
        offerPrice: 80,
      },
    };

    const output = addOffer(testNewOffer);

    expect(testNewOffer).toEqual({
      D: {
        prodQuantity: 4,
        offerPrice: 80,
      },
    });
  });
});
