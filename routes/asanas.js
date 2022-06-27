var express = require('express');
var router = express.Router();
const asanasCtrl = require('../controllers/asanas');


router.get('/', asanasCtrl.index);
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
