const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userShema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "this is the required field,please insert a username"],
    },
    phone: {
      type: String,
      required: [true, "this is the required field,please insert a username"],
    },
    email: {
      type: String,
      required: [true, "this is the required field,please insert a email"],
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
        "this is invalid email, please check it again",
      ],
    },
    password: {
      type: String,
      required: [true, "this is a required field,please insert an password"],
      match: [
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+|~-]).{8,}$/,
        `your password must contain at least one uppaercase character,one lowercase character, one special character`,
      ],
    },

    isUser: {
      type: Boolean,
      default: true,
    },

    imgUrl: {
      type: "string",
      default: "https://static.thenounproject.com/png/2291755-200.png",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = User = mongoose.model("User", userShema);
