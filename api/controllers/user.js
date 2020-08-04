const User = require('../models/UserModel');

const controller = (req, res, next) => {
  res.send('GET /user response is successful');
}

const addUser = (req, res, next) => {
  const newUser = new User(req.body);
  newUser.save((err, user) => {
    console.log(err);
    if (err) {
      return res.send(err)
    } else {
      return res.send(user);
    }
  });
}

module.exports = {
  controller,
  addUser,
}
