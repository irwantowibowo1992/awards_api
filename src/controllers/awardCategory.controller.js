const AwardCategoryService = require('../services/awardCategory.service');
const SuccessResult = require('../utils/response.util');

async function getAllCategories(req, res) {
  const query = req.query;
  const data = await AwardCategoryService.getAllAwardCategories(query);

  SuccessResult.make(res).sendWithHumps(data);
}

module.exports = {
  getAllCategories,
};
