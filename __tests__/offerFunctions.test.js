const { addOffer, removeOffer } = require("../offers");

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

    addOffer(testNewOffer);

    expect(testNewOffer).toEqual({
      D: {
        prodQuantity: 4,
        offerPrice: 80,
      },
    });
  });
});

describe("removeOffer", () => {
  test("should take an object (offer to be deleted); otherwise and error is returned", () => {
    const output = removeOffer("peanutbutter");
    const output1 = removeOffer([{ peanutbutter: 60 }]);
    const output2 = removeOffer([45, null]);

    expect(output).toBe(
      "Please provide the product to be deleted as an object data type"
    );
    expect(output1).toBe(
      "Please provide the product to be deleted as an object data type"
    );
    expect(output2).toBe(
      "Please provide the product to be deleted as an object data type"
    );
  });
  test("argument object should have a value of an object that has a prodQuantity and offerPrice property; otherwise and error is returned", () => {
    const output = removeOffer({
      A: {
        peanut: 3,
        offerPrice: 140,
      },
    });
    const output1 = removeOffer({
      A: {
        prodQuantity: 3,
        butter: 140,
      },
    });
    const output2 = removeOffer({
      A: {
        prodQuantity: "3",
        offerPrice: 140,
      },
    });
    const output3 = removeOffer({
      A: {
        prodQuantity: 2,
        offerPrice: null,
      },
    });
    expect(output).toBe(
      "Please make sure offer to be deleted has a value of 'object' dtaa type with a prodQuantity and an offerPrice property"
    );
    expect(output1).toBe(
      "Please make sure offer to be deleted has a value of 'object' dtaa type with a prodQuantity and an offerPrice property"
    );
    expect(output2).toBe(
      "Please make prodQuantity and offerPrice properties have values of data type 'number'"
    );
    expect(output3).toBe(
      "Please make prodQuantity and offerPrice properties have values of data type 'number'"
    );
  });
  test("should return an error if a offer to be deleted does not exist in the currentOffers object", () => {
    const output = removeOffer({
      X: {
        prodQuantity: 3,
        offerPrice: 140,
      },
    });
    const output1 = removeOffer({
      A: {
        prodQuantity: 8,
        offerPrice: 140,
      },
    });
    const output2 = removeOffer({
      B: {
        prodQuantity: 3,
        offerPrice: 60,
      },
    });
    expect(output).toBe(
      "Offer could not be deleted as it does not exist in currentOffers"
    );
    expect(output1).toBe(
      "Offer could not be deleted as it does not exist in currentOffers"
    );
    expect(output2).toBe(
      "Offer could not be deleted as it does not exist in currentOffers"
    );
  });
  test("should not mutate the input offer to be deleted", () => {
    const testOffer = {
      B: {
        prodQuantity: 3,
        offerPrice: 60,
      },
    };

    removeOffer(testOffer);

    expect(testOffer).toEqual({
      B: {
        prodQuantity: 3,
        offerPrice: 60,
      },
    });
  });
  test("should remove an existing offer from the currentOffers object if it matches the offer to be deleted", () => {
    const testOffer = {
      X: {
        prodQuantity: 2,
        offerPrice: 140,
      },
    };

    addOffer(testOffer);

    const output = removeOffer(testOffer);

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
      D: {
        prodQuantity: 4,
        offerPrice: 80,
      },
    });
  });
});
