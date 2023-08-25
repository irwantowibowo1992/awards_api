const AwardModel = require('../models/award.model');

async function getAllAwards({
  page = 0,
  limit = 6,
  category = null,
  pointFrom = null,
  pointTo = null,
}) {
  let lists = AwardModel.query()
    .select(
      'aw.id as award_id',
      'aw.title',
      'aw.point',
      'ac.id as award_category_id',
      'ac.name as award_category',
      'ai.image'
    )
    .alias('aw')
    .leftJoin({ ac: 'award_category' }, (join) => {
      join.on('ac.id', 'aw.award_category_id');
    })
    .leftJoin({ ai: 'award_image' }, (join) => {
      join.on('ai.award_id', 'aw.id');
    });

  if (category) {
    lists = lists.whereIn('ac.name', category.split(','));
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
