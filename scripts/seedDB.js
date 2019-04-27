const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/air_dnd"
);

const eventSeed = [
  {
    title: "FNM - TheCoolStore",
    venue: "1313 Mockinjay Lane",
    game: "Magic the Gathering",
    date: new Date(Date.now()),
    time:16.00
  },
  {
    title: "Pathfinder Society - TheCoolStore",
    venue: "1313 Mockinjay Lane",
    game: "Pathfinder",
    date: new Date(Date.now()),
    time:18.00
  }
];

db.Event
  .remove({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });