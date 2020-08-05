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

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).exec();
  if (!user) {
    return res.send('No such email in the database');
  }
  const validPassword = await user.validatePassword(password);
  if (validPassword) {
    return res.send('Password OK')
  } else {
    return res.send('NOK');
  }
}

module.exports = {
  user,
  addUser,
  loginUser
}
