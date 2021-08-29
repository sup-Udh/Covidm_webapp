const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;


const GOOGLE_CLIENT_ID = '738177854751-ith7ms5rfv3sfkt4vtnra4vh5bk779dr.apps.googleusercontent.com';
// Google console log test

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: process.env.API_KEY,
  callbackURL: "http://localhost:3000/google/callback",
  passReqToCallback: true,
},
function(request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});