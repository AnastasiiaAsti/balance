var express = require('express');
var router = express.Router();
const asanasCtrl = require('../controllers/asanas');


router.get('/', asanasCtrl.index);

module.exports = router;
