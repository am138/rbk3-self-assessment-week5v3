var app = require('./server').app;
var User = require('./server').User;
var port = 3000;

var express = require('express');
var models  = require('../models');
var router  = express.Router();

router.get('/users',function(req, res){
  models.User.findAll({ include : [User] })
  .then ( users => {
    console.log(JASON.stringfiy(users))
  })
}



User.sync({ force: true })
  .then(function () {
    console.log('Users table created');
    return User.create({ username: 'zlester' });
  })
  .then(function() {
    console.log('Seeded User table');
    app.listen(port, function() {
      console.log('node-express-sequelize listening on ' + port);
    });
  });
  
  module.exports = router ;
