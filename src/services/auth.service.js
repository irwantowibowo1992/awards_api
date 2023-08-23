const bcrypt = require('bcryptjs');
const humps = require('humps');
const NotFound = require('../exceptions/notFound.exception');
const Unauthorized = require('../exceptions/unauthorized.exception');
const UserModel = require('../models/user.model');
const JwtToken = require('../utils/jwt.util');

async function login(email, password) {
  const userData = await UserModel.query()
    .select()
    .where({
      email: email,
    })
    .first();

  if (!userData) {
    throw new NotFound('Data tidak ditemukan');
  }

  // compare password
  const checkPassword = await bcrypt.compare(password, userData.password);
  if (!checkPassword) {
    throw new Unauthorized('Email or password is missmatch');
  }

  return await afterLogin(userData);
}

async function afterLogin(user) {
  // create token
  const paramToken = {
    id: user.id,
    name: user.name,
    email: user.email,
    username: user.username,
    role: user.user_role,
  };

  const expiredIn = {
    duration: 1,
    shorthandUnit: 'd',
  };

  const token = JwtToken.setToken(paramToken, expiredIn);

  const dataLogin = {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
      role: user.user_role,
    },
    token,
  };

  return humps.camelizeKeys(dataLogin);
}

module.exports = {
  login,
};
