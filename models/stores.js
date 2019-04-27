const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storesSchema = new Schema({
  name: { type: String, required: true, unique:true },
  email: { type: String, unique: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"]},
  password: {type:String, required:true, unique:true},
  location: { type: String, required: true },
  webpage: String,
  games:Array
});

const Store = mongoose.model("Store", storesSchema);

module.exports = Store;