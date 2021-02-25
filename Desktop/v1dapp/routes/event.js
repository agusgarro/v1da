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
    res.json(event)
 })
 .catch(err => {
     res.json(err);
 })
})

module.exports = router; 