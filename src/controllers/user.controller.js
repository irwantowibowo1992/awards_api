const userService = require('../services/user.service');
const SuccessResult = require('../utils/response.util');

async function profile(req, res) {
  const user = req.user;
  const data = await userService.profile(user);
  SuccessResult.make(res).sendWithHumps(data);
}

module.exports = {
  profile,
};
