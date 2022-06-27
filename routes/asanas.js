var express = require('express');
var router = express.Router();
const asanasCtrl = require('../controllers/asanas');
const isLoggedIn = require('../config/auth');


router.get('/', asanasCtrl.index);
router.get('/:id', asanasCtrl.show);

module.exports = router;
