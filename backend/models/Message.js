const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    fullName: {
      type: "string",
    },
    email: {
      type: String,
      required: [true, "The blog's body is required"],
    },
    phone: {
      type: "string",
    },
    message: {
      type: String,
      required: [true, "The blog's body is required"],
    },
  },
  { timestamps: true }
  // creation abd update time
);

module.exports = Message = mongoose.model("messages", messageSchema);
