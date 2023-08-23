const AwardCategoryModel = require('../models/awardCategory.model');

async function getAllAwardCategories({ page = 0, count = 10 }) {
  return await AwardCategoryModel.query().select().page(page, count);
}

module.exports = {
  getAllAwardCategories,
};
