const bcrypt = require("bcrypt-nodejs");

module.exports = {
  attributes: {
    username: {
      type: "string",
      required: true,
      unique: true
    },
    password: {
      type: "string",
      required: true
    },
    admin: {
      type: "boolean",
      defaultsTo: false
    },
    email: {
      type: "string"
    },
    birthday: {
      type: "string"
    },
    photo: {
      type: "string"
    },
    addresses: {
      collection: "address",
      via: "user"
    },
    absences: {
      collection: "absence",
      via: "user"
    },
    worklogs: {
      collection: "worklog",
      via: "user"
    }
  },
  customToJSON: function() {
    return _.omit(this, ["password"]);
  },
  beforeCreate: function(user, cb) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, null, function(err, hash) {
        if (err) return cb(err);
        user.password = hash;
        return cb();
      });
    });
  },
  beforeUpdate: function(user, cb) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, null, function(err, hash) {
        if (err) return cb(err);
        user.password = hash;
        return cb();
      });
    });
  }
};
