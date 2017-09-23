var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });

var User = sequelize.define('User', {
  username: Sequelize.STRING
});


//first i need to make the route 
var router=express.Router();
router.get('/',function(req,res){
	res.send('users');
}) //home page route 

router.get('/users',function(req,res){
	res.send('users');
}) //the route

//load the router in the app 
app.use('/users')



module.exports = { 
  app: app,
  User: User,
};
