var express = require('express');
const authRoutes = require('./routes/auth_routes');
const passportSetup = require('./config/passport-setup');

var app = express();
var ejs = require('ejs');
// Set up a ejs
app.set('view engine' , 'ejs');

// set up routes middleware
app.use('/auth' , authRoutes);


app.get('/' , function(req ,res){
  res.render('home');
});

//Port
app.listen(3000);
