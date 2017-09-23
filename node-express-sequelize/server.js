var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });


app.get('/',function(req,res){
  if(req.url!=='/' && req.url!=='/users'){
    res.writeHead(404,{'Concat-Type':'text/plain'})
    res.end();
  }else{
    res.writeHead(200,{'Concat-Type':'text/plain'})
    res.end();
  }
})

app.post('/users',function(req,res){
  sequelize().sync()
  .then(User => {
    User.get({
      User:true
    });
});

var User = sequelize.define('User', {
  username: Sequelize.STRING
});

module.exports = { 
  app: app,
  User: User
};
