/**
 * Address.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    street: {
      type: "string",
      required: true
    },
    postalCode: {
      type: "string"
    },
    district: {
      type: "string",
      required: true
    },
    city: {
      type: "string",
      required: true
    },
    state: {
      type: "string",
      required: true
    },
    stateCode: {
      type: "string"
    },
    country: {
      type: "string",
      required: true
    },
    countryCode: {
      type: "string"
    },
    text: {
      type: "string"
    },
    user: {
      model: "user"
    }
  }
};
