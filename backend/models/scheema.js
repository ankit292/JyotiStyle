// const mgDB = require("../db/connection");
const mongoose = require("mongoose");
var validator = require("validator");

const userScheema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minLength: 4,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 5,
    validate(val) {
      if (!validator.isEmail(val)) {
        throw Error("Email already exsist");
      }
    },
  },
  phone: {
    type: Number,
    required: true,
  },
    address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
  },
  cpassword: {
    type: String,
    required: true,
    minLength: 5,
  },
    date: {
    type: Date,
    default: Date.now,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

const User = new mongoose.model("User", userScheema);

module.exports = User;
