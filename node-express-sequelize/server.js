var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });


//define User table !!
var User = sequelize.define('User', {
  username: Sequelize.STRING
});

app.get('/users' , function (req, res) {
	//fetch all users from users table , using user model 
	/*var data = User.findAll({
		attributes : ['username']
	});*/
    User.findAll({
		attributes : ['username']
	}).then((err, data) => {
       res.json(data);
    });
	/*res.json(data);*/
})


module.exports = { 
  app: app,
  User: User
};
