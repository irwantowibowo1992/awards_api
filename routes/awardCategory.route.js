const router = require('express-promise-router')();
const AwardCategory = require('../src/controllers/awardCategory.controller');

router.get('/categories', AwardCategory.getAllCategories);

module.exports = router;
