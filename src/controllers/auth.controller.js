const AuthService = require('../services/auth.service');
const SuccessResult = require('../utils/response.util');

async function login(req, res) {
  const { email, password } = req.body;

  const data = await AuthService.login(email, password);

  SuccessResult.make(res).sendWithHumps(data);
}

module.exports = {
  login,
};
