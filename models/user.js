const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const users_Schema = new Schema({
  username: { type: String, required: true, unique:true},
  email: { type: String, unique: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"]},
  password: {type:String, required:true, unique:true},
  name:String,
  games:Array,
  userCreated: {type: Date, default: Date.now}
});

const User = mongoose.model("User", users_Schema);

module.exports = User;