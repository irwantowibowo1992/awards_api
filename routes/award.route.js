const route = require('express-promise-router')();
const Authentication = require('../src/middlweares/authentication.middleware');
const AwardController = require('../src/controllers/award.controller');

route.get('/awards', Authentication.auth, AwardController.getAllAwards);

module.exports = route;
