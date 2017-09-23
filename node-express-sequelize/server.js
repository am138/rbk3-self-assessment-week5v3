var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });

var User = sequelize.define('User', {
  username: Sequelize.STRING
   userid: Sequelize.number
});
var massege = sequelize.define('massege', {
  massege: Sequelize.STRING,
   text: Sequelize.STRING,
   roomname:Sequelize.STRING
});
User hasmany massages
massege belong to user
user sync();
massege sync();
sequelize.sync()
  .then(() => User.create({
    username: '',
    userid: increment id
  }))
  .then( => {
    (get({
      plain: true
    }));
  });

module.exports = { 
  app: app,
  User: User
};


