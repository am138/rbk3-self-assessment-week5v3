var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });

var User = sequelize.define('User', {
  username: Sequelize.STRING
});

module.exports = { 
  app: app,
  User: User
};

app.get('/users', function (req, res) {
// call sequalize search function
  User.findAll().then(users => {
  // send results to user
    res.send(users);
  });
});