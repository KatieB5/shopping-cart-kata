let currentOffers = {
  A: {
    prodQuantity: 3,
    offerPrice: 140,
  },
  B: {
    prodQuantity: 2,
    offerPrice: 60,
  },
};

const addOffer = (newOffer) => {
  const productName = Object.keys(newOffer)[0];
  if (typeof newOffer !== "object" || Array.isArray(newOffer)) {
    return "Please provide a newOffer as an object data type";
  } else if (
    Object.keys(newOffer[productName])[0] !== "prodQuantity" ||
    Object.keys(newOffer[productName])[1] !== "offerPrice"
  ) {
    return "Please provide a newOffer object with a prodQuantity and an offerPrice property";
  } else if (
    typeof newOffer[productName].prodQuantity !== "number" ||
    typeof newOffer[productName].offerPrice !== "number"
  ) {
    return "Please provide a newOffer object with values of data type 'number' for prodQuantity and an offerPrice property";
  } else if (Object.hasOwn(currentOffers, productName)) {
    if (
      newOffer[productName].prodQuantity ===
        currentOffers[productName].prodQuantity ||
      newOffer[productName].offerPrice === currentOffers[productName].offerPrice
    ) {
      return "The offer provided already exists; please provide a unique newOffer";
    }
  }

  currentOffers[productName] = newOffer[productName];

  return currentOffers;
};

const removeOffer = (offerToBeDeleted) => {
  const productName = Object.keys(offerToBeDeleted)[0];
  if (typeof offerToBeDeleted !== "object" || Array.isArray(offerToBeDeleted)) {
    return "Please provide the product to be deleted as an object data type";
  } else if (
    Object.keys(offerToBeDeleted[productName])[0] !== "prodQuantity" ||
    Object.keys(offerToBeDeleted[productName])[1] !== "offerPrice"
  ) {
    return "Please make sure offer to be deleted has a value of 'object' dtaa type with a prodQuantity and an offerPrice property";
  } else if (
    typeof offerToBeDeleted[productName].prodQuantity !== "number" ||
    typeof offerToBeDeleted[productName].offerPrice !== "number"
  ) {
    return "Please make prodQuantity and offerPrice properties have values of data type 'number'";
  }

  if (Object.hasOwn(currentOffers, productName)) {
    if (
      offerToBeDeleted[productName].prodQuantity ===
        currentOffers[productName].prodQuantity &&
      offerToBeDeleted[productName].offerPrice ===
        currentOffers[productName].offerPrice
    ) {
      delete currentOffers[productName];
      return currentOffers;
    } else {
      return "Offer could not be deleted as it does not exist in currentOffers";
    }
  } else {
    return "Offer could not be deleted as it does not exist in currentOffers";
  }
};

module.exports = { currentOffers, addOffer, removeOffer };
