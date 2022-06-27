var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/', function(req, res, next) {
  res.redirect('/asanas');
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
  }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/asanas',
    failureRedirect: '/asanas'
  }
));

// OAuth logout route
router.get('/logout', function(req, res) {
  req.logout(function (err) {
    if (err) console.log(err)
    res.redirect('/asanas')
  })
})


module.exports = router;
