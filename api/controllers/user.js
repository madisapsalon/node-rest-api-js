const User = require('../models/UserModel');

const user = (req, res, next) => {
  res.send('GET /user response is successful');
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

const loginUser = (req, res, next) => {
  res.send('Login user');
}

module.exports = {
  user,
  addUser,
  loginUser
}
