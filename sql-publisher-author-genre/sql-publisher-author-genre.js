var Schemas = {
	
    
    authors : varChar(20) NOT NULL ,
    name : varChar(20) NOT NULL ,
  
};

var sqlPublisherAuthorSchema = CREATE TABLE sqlPublisherAuthorSchema({
	id : varChar(20) NOT NULL  PRIMARY KEY,
	firstName : varChar(255) NOT NULL,
    lastName : varChar(255) NOT NULL,
    publisher : varChar(20) REFERENCES Permissions (sqlPublisherGenreSchema)
})
// TODO: Write a comment here explaining your choice

var sqlPublisherGenreSchema = CREATE TABLE sqlPublisherGenreSchema({
	id : varChar(20) NOT NULL  PRIMARY KEY,
	authors : varChar(20) NOT NULL REFERENCES Permissions (sqlPublisherGenreSchema),
    name : varChar(20) NOT NULL 

}) 
// TODO: Write a comment here explaining your choice

var sqlAuthorGenreSchema = CREATE TABLE sqlAuthorGenreSchema({
 id : varChar(20) NOT NULL  PRIMARY KEY, 
 publisher : varChar(20) REFERENCES Permissions (sqlPublisherGenreSchema),
 authors : varChar(20) NOT NULL REFERENCES Permissions (sqlPublisherGenreSchema)
})
// TODO: Write a comment here explaining your choice
