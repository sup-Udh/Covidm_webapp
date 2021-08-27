const express = require('express')
const app = express();
const path = require('path');
const port = 3000;
const fs = require('fs')
const mysql = require('mysql');
const ejs  = require('ejs');

const passport = require('passport');
var userProfile;


app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

app.get('/success', (req, res) => res.send(userProfile));
app.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

app.set('view engine', 'ejs');



// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

// Set Views
app.set('views', './views')
app.set('login'  , './views/index.html')
app.set('view engine', 'ejs')





// main route



app.get('/', (req, res) => {
  console.log("user has entered the home page")
  fs.readFile('./views/home_page/home.ejs' , function(err,data){
    res.writeHead(200, {'Context-type': 'text/html'});
    res.write(data);
    return res.end();
  })
});

app.get('/login', (req,res) => {
    fs.readFile('./views/login/login.ejs', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
});






app.listen(port, () => {
  console.log(` app listening on port ${port}!`)
});






