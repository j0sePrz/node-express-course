const express = require('express');
const router = express.Router();

const { logon,hello } = require('../controllers/controller');

const verifyToken = require('../middleware/middlewareAuthentication');

router.route('/hello').get(verifyToken,hello);
router.route('/logon').post(logon);



module.exports = router
