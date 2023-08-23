const UserModel = require('../models/user.model');

async function profile(user) {
  console.log(user);
  return UserModel.query().select('id', 'name', 'email').findById(user.id);
}

module.exports = {
  profile,
};
