const express = require ('express');
const router = express.Router();
const Event = require ('../models/Event');

//get all the events

router.get('/', (req, res, next) => {
    Event.find()
      .then(events => {
        res.status(200).json(events);
      })
      .catch(err => {
        res.json(err);
      })
  
  });

  //get a specific event
// to check if id is a valid mongo object id: mongoose.Types.ObjectId.isValid(_id)
router.get('/:id', (req, res, next) => {
  Event.findById(req.params.id)
    .then(event => {
      if (!event) {
        res.status(404).json();
      } else {
        res.status(200).json(event);
      }
    })
    .catch(err => {
      res.json(err);
    })
});

//create an event

router.post ('/', (req, res)=> {
 const {title, description, image, attendees, date, startTime, endTime} = req.body;
 Event.create ({
     title,
     description,
     image,
     attendees,
     date,
     startTime,
     endTime

 })
.then (event => {
    res.status(201).json(event)
 })
 .catch(err => {
     res.status(500).json(err);
 })
})

// update an event
router.put('/:id', (req, res, next) => {
  const { title, description, image, attendees, date, startTime, endTime } = req.body;
  Event.findByIdAndUpdate(
    req.params.id,
    { title, description, image, attendees, date, startTime, endTime},
    // this ensures that we are getting the updated document as a return 
    { new: true }
  )
    .then(event => {
      console.log(event);
      res.status(200).json(event);
    })
    .catch(err => {

    })
});

//delete an event

router.delete('/:id', (req, res, next) => {
  Event.findByIdAndDelete(req.params.id)
    .then(event => {
      res.status(200).json({ message: 'ok' })
    })
    .catch(err => {
      res.json(err);
    })
});



module.exports = router; 