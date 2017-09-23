var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });

var User = sequelize.define('User', {
  username: Sequelize.STRING,
    firstName:Sequelize.STRING,
    lastName:Sequelize.STRING,
    user_id: Sequelize.INTEGER
});

app.route('/users') 

.get(function(req, res, next) {
  res.json('GET')
})
.post(function(req, res, next) {
  res.json('req.body')
});
    
module.exports = { 
  app: app,
  User: User
};
