const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema ({
    type = String,
    from = String,
    to = String,
    created_at = Date,
    updated_at = Date

});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;