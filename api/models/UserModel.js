const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    index: { unique: true },
    minlength: 3,
  },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
