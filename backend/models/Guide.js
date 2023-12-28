const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guideSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "The blog's body is required"],
    },
    resume: {
      type: String,
      required: [true, "The blog's body is required"],
    },
    imgUrl: {
      type: "string",
      default: "https://static.thenounproject.com/png/2291755-200.png",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    phone: {
      type: String,
    },
    rate: {
      type: Number,
    },
    adress: {
      type: String,
      required: [true, "The blog's body is required"],
    },

    isReserved: {
      type: Boolean,
      default: false,
    },
    isPending: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
  // creation abd update time
);

module.exports = Guide = mongoose.model("guides", guideSchema);
