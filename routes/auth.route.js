const router = require('express-promise-router')();
const { login } = require('../src/controllers/auth.controller');

router.post('/auth/login', login);

module.exports = router;
