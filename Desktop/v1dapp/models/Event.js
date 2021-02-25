const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: String,
    description: String,
    image: String,
    attendees: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    date: Date,
    startTime: "",
    endTime: ""
    
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
