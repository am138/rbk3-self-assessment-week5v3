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
/*
   Option 6  : 
     since auther-publisher relationship is many-to-many , we will need a connection table between both id's of the two tables .. 

*/

var sqlPublisherGenreSchema = 
// TODO: Write a comment here explaining your choice
/* 
  Option 4 :
    for each publisher , one genre will be assigned .. one column inside the publisher references the genre will be enough since it's one-to-many relationship
*/

var sqlAuthorGenreSchema = 
// TODO: Write a comment here explaining your choice
/*
  Option 6 :
  since auther-Genre relationship is many-to-many , we will need a connection table between both id's of the two tables .. 
*/
