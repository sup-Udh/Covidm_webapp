const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
var LinkedInStrategy = require('@sokratis/passport-linkedin-oauth2').Strategy;



const GOOGLE_CLIENT_ID = '738177854751-ith7ms5rfv3sfkt4vtnra4vh5bk779dr.apps.googleusercontent.com';
// Google console log test

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: process.env.API_KEY,
  // switch back later on to the main heroku route (IMP REMINDER
  callbackURL: "https://covidm-beta.herokuapp.com/google/callback",
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

passport.use(new GitHubStrategy({
  clientID: '45b8c373721feb005300',
  clientSecret: process.env.CLIENT_SECERT,
  callbackURL: "https://covidm-beta.herokuapp.com/github/callback"
},
function(accessToken, refreshToken, profile, done) {
  return done(null, profile);
}
));
// CHANGE CALL BACK URL WHEN DEPLOYED PLSSS DON'T FOGETTT
// ON ALL THE FRICKING WEBSITE FOR OUATHS (GITHUB , LINKDINN)
passport.use(new LinkedInStrategy({
  clientID: '86to9023qpbh3p',
  clientSecret: process.env.LINKEDIN_KEY,
  callbackURL: "https://covidm-beta.herokuapp.com/linkedin/callback"
},
function(acessToken , refreshToken , profile, done){
    return done(null , profile);
}
));

