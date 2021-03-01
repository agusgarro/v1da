const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  profileImage: String,
  imagePublicID: String,
  aboutMe: String,
  eventsAttended: [ { type: Schema.Types.ObjectId, ref: 'Event'  } ],
  inboxNotification: 
    [
      {
        type: Schema.Types.ObjectId, ref: 'User', 
        messageContent: String, 
        read: Boolean
      }  
    ]
  },
 
  {
    timestamps: true
  },
    
);

const User = mongoose.model('User', userSchema);
module.exports = User;
