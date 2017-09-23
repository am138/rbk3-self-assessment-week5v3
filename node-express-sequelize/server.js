var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });

var User = sequelize.define('User', {
  username: Sequelize.STRING
});

////'/users' route that responds to a GET request and
///* [ ] Uses the provided Sequelize `User` model to send all `users` currently in the database

app.get('/users', function(req,res){
	User.findAll().then(function(users){
		res.status(200).send(users);
		console.log('it is done');
	})
});

module.exports = { 
  app: app,
  User: User
};
