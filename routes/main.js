const express = require('express');
const router = express.Router();
const {login, dashBoard} = require('../controllers/main');
const authenticationMiddleware = require('../middleware/auth');

router.route('/login').post(login);
router.route('/dashboard').get(authenticationMiddleware,dashBoard);

module.exports = router;