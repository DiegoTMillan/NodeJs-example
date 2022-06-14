const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema(
  {
    first_name: {
      required: true,
      type: String,
    },
    last_name: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      unique: true,
      type: String,
    },
    phone: {
      required: true,
      type: String,
    },
  },
  {
    //esto es para que el __v:0 que es la key version no salga en el prompt
    versionKey: false,
  }
);

module.exports = mongoose.model("member", memberSchema);
