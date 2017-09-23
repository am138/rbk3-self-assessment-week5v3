// * [ ] Create a '/users' route that responds to a GET request and
// * [ ] Uses the provided Sequelize `User` model to send all `users` currently in the database

var express = require('express');
var app = express();
var app = express();
var User = express();

Post.findAll({
  include: [User];
  }
});

model.User={
	get: function(callback){
		var queryStr="select * from User";
		query.? (queryStr, function(err,result){
			callback(result)
		});
	}
}