const router = require('express').Router();
const passport = require('passport');
// Login
router.get('/login' , (req,res) => {
  res.render('login');
});

// Logout
router.get('/logout' , (req,res) => {
  // Passport
  res.send('Logout working');
});

// Auth with google

router.get('/google', passport.authenticate('google',{
  // Here we add all those information what we want from google
  // Example : 'profile','email'
  scope:['profile','email']
}));

module.exports = router;
