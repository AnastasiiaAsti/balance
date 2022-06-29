var express = require('express');
var router = express.Router();
const asanasCtrl = require('../controllers/asanas');
const isLoggedIn = require('../config/auth');


router.get('/', asanasCtrl.index);
router.get('/new', isLoggedIn, asanasCtrl.new);
router.get('/:id', asanasCtrl.show);
router.post('/', asanasCtrl.create);
router.delete('/:id', asanasCtrl.delete);

module.exports = router;
