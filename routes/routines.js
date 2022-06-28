const express = require('express');
const router = express.Router();
const routinesCtrl = require('../controllers/routines');
const isLoggedIn = require('../config/auth');

router.get('/routines/new', isLoggedIn, routinesCtrl.new);
router.post('/routines', isLoggedIn, routinesCtrl.create);

module.exports = router;