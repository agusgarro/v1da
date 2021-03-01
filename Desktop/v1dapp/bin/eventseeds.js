const mongoose = require('mongoose');
const Event = require('../models/Event');
const User = require('../models/User');

mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/v1dapp', {
  useNewUrlParser: true
});

const event = [
  {
    title: "learning languages",
    description: "an event to learn together the basic of",
    image: '',
    attendees: [],
    date: new Date(2020, 11, 15),
    startTime: [18, 00],
    endTime: [21, 00],
  },

  {
    title: "Trivia night",
    description: "trivia night about history",
    image: '',
    attendees: [],
    date: new Date(2020, 09, 15) ,
    startTime: [10, 00],
    endTime: [13, 00],
  }
  
]
 

Event.insertMany(event).then(data => {
  console.log("successfully inserted");
  mongoose.connection.close();
  }).catch(err => {
    console.log(err);
})