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
  if (typeof newOffer !== "object" || Array.isArray(newOffer)) {
    return "Please provide a newOffer as an object data type";
  } else if (Object.keys(newOffer[Object.keys(newOffer)[0]])[0] !== "prodQuantity" ||  Object.keys(newOffer[Object.keys(newOffer)[0]])[1] !== "offerPrice") {
    return "Please provide a newOffer object with a prodQuantity and an offerPrice property"
  } else if (typeof newOffer[Object.keys(newOffer)[0]].prodQuantity !== "number" || typeof newOffer[Object.keys(newOffer)[0]].offerPrice !== "number") {
    return "Please provide a newOffer object with values of data type 'number' for prodQuantity and an offerPrice property"
  } else if (currentOffers.hasOwnProperty(Object.keys(newOffer)[0])) {
    if (newOffer[Object.keys(newOffer)[0]].prodQuantity === currentOffers[Object.keys(newOffer)[0]].prodQuantity || newOffer[Object.keys(newOffer)[0]].offerPrice === currentOffers[Object.keys(newOffer)[0]].offerPrice) {
        return "The offer provided already exists; please provide a unique newOffer"
    }
  }

  currentOffers[Object.keys(newOffer)[0]] = newOffer[Object.keys(newOffer)[0]];

  return currentOffers;
};

const removeOffer = () => {};

module.exports = { currentOffers, addOffer };
