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

// handle a get request that is being sent to the url path /users
//the response will send all the users
//resonse will send stingified json results
//in case of an error i send back a messafe to user
app.GET("/users",function (req,res) {
	User.findAll().then(function (err,user) {
		if (err) {
			res.setStatus(404).send('sorry, an error happend trying to find users')
		}
		res.send(JSON.stringify(user))
	})
})