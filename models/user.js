const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user_Schema = new Schema({
  username: { type: String, required: true, unique:true},
  email: { type: String, unique: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"]},
  password: {type:String, required:true, unique:true},
  name:String,
  games:Array,
  is_Store: {type: Boolean, default: false},
  userCreated: {type: Date, default: Date.now},
  events: [
    {
     type:Schema.Types.ObjectId,
     ref:"Event"
    }
   ]
});

const User = mongoose.model("User", user_Schema);

module.exports = User;