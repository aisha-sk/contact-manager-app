const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the contact's name"],
    },
    email: {
      type: String,
      required: [true, "Please add the email adress"],
    },
    phone: {
      type: String,
      required: [true, "Please add the contact number"],
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
