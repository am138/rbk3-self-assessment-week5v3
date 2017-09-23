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

var sqlPublisherAuthorSchema = Schemas[OPTION_6]
// TODO: Write a comment here explaining your choice
/*
I chossed "Option 6" because each publisher has many authors and each author has 
many publishers so i need a third or middle table wish is publisher_author to connect
between them.

*/

var sqlPublisherGenreSchema = Schemas[OPTION_4]
// TODO: Write a comment here explaining your choice
/*
I chossed "Option 4" because each publisher has one genre and each genre has many publisher 
so, i need to declare foreign key in publisher wich is id_genre to connect between them.
*/

var sqlAuthorGenreSchema = Schemas[OPTION_6]
// TODO: Write a comment here explaining your choice
/*
I chossed "Option 6" because each author has many gener and each gener has 
many authors so i need a third or middle table wish is author_genre to verify the relation 
of many to many and connect between them
*/
