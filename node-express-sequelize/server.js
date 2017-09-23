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


app.get('/users',
function(res , req){
  res.json("users");
});

app.post("/users" , 
function(req, res){
  var str = "insert into (users) values ("+req.body.username + ")";
  sequelize.query(str , function (err){
    if(err){
      throw err;
    }
    res.json("SUCESSFUL !!!")
  })
})


