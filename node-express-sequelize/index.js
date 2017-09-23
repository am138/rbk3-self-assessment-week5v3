var app = require('./server').app;
var User = require('./server').User;
var port = 3000;

User.sync({ force: true })
  .then(function () {
    console.log('Users table created');
    return User.create({ username: 'zlester' });
  })
  .then(function() {
    console.log('Seeded User table');
    app.listen(port, function() {
      console.log('node-express-sequelize listening on ' + port);
    });
  });


app.get('/users',function (req,res) {
  res.render('users');
});

app.post('/users' , function(req,res) {
  var username=req.body.username;
  User.findAll({username:username}).exec(function(err,results){
 if(err){ throw err}
  else{
    res.JSON(results);
  }
  })
})
  