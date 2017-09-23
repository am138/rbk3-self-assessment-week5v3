var app = require('./server').app;
var User = require('./server').User;

users:{
	GET:{
		function(req,res) {
			var query='select * from User';
			User.findAll(query,function(err,results){
				if(err){
					res.sendStatus(404)
				}
				res.send(query)
			})
		}
	}
}