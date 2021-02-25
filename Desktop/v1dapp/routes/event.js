const express = require ('express');
const router = express.Router();
const Event = require ('../models/Event');



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

module.exports = router; 