const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var placeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
  },
  {
    timestamp: true,
  }
);

//Export the model
module.exports = mongoose.model("Place", placeSchema);
