const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alertSchema = new Schema ({
    text : Text,
    created_at: Date,
    updated_at: Date,

});

const Alert = mongoose.model('Alert', alertSchema);

module.exports = Alert;

