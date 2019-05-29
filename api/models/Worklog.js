/**
 * Worklog.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    date: {
      type: "string",
      required: true
    },
    in: {
      type: "string"
    },
    out: {
      type: "string"
    },
    note: {
      type: "string"
    },
    user: {
      model: "user"
    }
  }
};
