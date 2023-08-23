const router = require('express-promise-router')();
const { profile } = require('../src/controllers/user.controller');
const Authentication = require('../src/middlweares/authentication.middleware');

/* GET users listing. */
router.get('/profile', Authentication.auth, profile);

module.exports = router;
