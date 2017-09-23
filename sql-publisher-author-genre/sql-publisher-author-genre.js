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

var sqlPublisherAuthorSchema = 
// TODO: Write a comment here explaining your choice
// option 6 because the relationship as mintioned is many to many 
// "publisher has many authors and author has many publishers"

var sqlPublisherGenreSchema = 
// TODO: Write a comment here explaining your choice
// option 4 because the relationship is one genre to many publishers so the genre id should be in the publisher table

var sqlAuthorGenreSchema = 
// TODO: Write a comment here explaining your choice
// option 6 because the relationship is many genre to many authors so there should be a new table containing the id's