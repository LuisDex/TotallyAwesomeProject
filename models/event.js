const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const events_Schema = new Schema({
  title: { type: String, required: true},
  venue:{type:String, required:true},
  game:{type:String, required:true},
  date:Date,
  time:Number
});

const Event = mongoose.model("Event", events_Schema);

module.exports = Event;