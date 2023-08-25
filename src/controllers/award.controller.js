const AwardService = require('../services/award.service');
const SuccessResult = require('../utils/response.util');

async function getAllAwards(req, res) {
  const query = req.query;
  const data = await AwardService.getAllAwards(query);
  SuccessResult.make(res).sendWithHumps(data);
}

module.exports = {
  getAllAwards,
};
