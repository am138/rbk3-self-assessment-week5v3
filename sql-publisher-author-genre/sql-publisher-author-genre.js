var Schemas = {
  FIX_ME: 'wrong answer',
  OPTION_0: 'option 0',
  OPTION_1: 'option 1',
  OPTION_2: 'option 2',
  OPTION_3: 'option 3',
  OPTION_4: 'option 4',
  OPTION_5: 'option 5',
  OPTION_6: 'option 6'
};

var sqlPublisherAuthorSchema = Schemas.OPTION_6;
// TODO: Write a comment here explaining your choice
//the Option 6 because we have a many to many relationship
// the publisher can has many authors and also the author may has many publishers
// so we have a foreign key in both of them.
// foreign keys are: publisher ID , Author Id


var sqlPublisherGenreSchema =Schemas.OPTION_4; 
// TODO: Write a comment here explaining your choice
//the Option 4 because the relatioship between them it's 1 to many
// so the Publisher has a foreign key which is the gener Id 
// 1 publisher can has many geners. 

var sqlAuthorGenreSchema = Schemas.OPTION_6;
// TODO: Write a comment here explaining your choice
//the Option 6 because we have a many to many relationship
// the author can has many genres and also the genre may has many authors
// so we have a foreign key in both of them.
//  foreign keys are: genre ID , Author Id.
