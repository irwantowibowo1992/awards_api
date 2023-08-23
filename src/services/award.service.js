const AwardModel = require('../models/award.model');

async function getAllAwards({
  page = 0,
  limit = 6,
  category = null,
  pointFrom = null,
  pointTo = null,
}) {
  const lists = AwardModel.query()
    .select(
      'aw.id as award_id',
      'aw.title',
      'aw.point',
      'ac.id as award_category_id',
      'ac.name as award_category'
    )
    .alias('aw')
    .leftJoin({ ac: 'award_category' }, (join) => {
      join.on('ac.id', 'aw.award_category_id');
    });

  if (category) {
    lists = lists.whereIn('aw.award_category_id', category.split(','));
  }

  if (pointFrom) {
    lists = lists.where('aw.point', '>=', pointFrom);
  }

  if (pointTo) {
    lists = lists.where('aw.point', '<=', pointTo);
  }

  let results = await lists.page(page, limit);
  return results;
}

module.exports = {
  getAllAwards,
};
