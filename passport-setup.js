const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(
  new GoogleStrategy({
  //options for google Google Strategy
  callbackURL: '/auth/google/redirect',
  ClientID : keys.google.ClientID,
  ClientSecret : keys.google.ClientSecret
} ,() => {
  // Passport callback function
})
);
