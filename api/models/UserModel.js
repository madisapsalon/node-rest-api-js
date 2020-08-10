const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    index: { unique: true },
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  password: {
    type: String,
    required: true,
    trim: true,
    index: { unique: true },
    minlength: 8,
  },
  salt: {
    type: String
  }
}, { timestamps: true });

UserSchema.pre('save', async function preSave(next) {
  if (!this.isModified('password')) return next();
  try {
    this.salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, this.salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

UserSchema.methods.validatePassword = async function (password) {
  const hash = await bcrypt.hash(password, this.salt);
  return hash === this.password;
};

module.exports = mongoose.model('User', UserSchema);
