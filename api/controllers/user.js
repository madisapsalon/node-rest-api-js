const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');

const userInfo = (req, res) => {
  const userData = req.userData;
  res.json(userData);
}

const addUser = async (req, res) => {
  const newUser = new User(req.body);
  newUser.save((err, user) => {
    if (err) {
      return res.send(err)
    } else {
      return res.send(user);
    }
  });
}

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).exec();

  if (user && await user.validatePassword(password)) {
    const token = jwt.sign(
      { email: user.email, id: user.id },
      process.env.JWT_KEY || 'secretkey',
      { expiresIn: '1h' })
    return res.json({ token });
  } else {
    return res.send('User validation failed.');
  }
}

module.exports = {
  userInfo,
  addUser,
  loginUser
}
