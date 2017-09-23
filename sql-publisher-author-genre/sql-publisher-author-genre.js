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
//choice option 6 because the relationship is many-many then must make another table 
//(general the name of this table is concatenate of the  2 tables name) have the publisherid --- make relationship between id and publisher table(id)
//and have author-id to make relatiopnship with author table

var sqlPublisherGenreSchema = 
// TODO: Write a comment here explaining your choice
//i choice option 4 because the relationship is one - many (one gener has many publisher)

var sqlAuthorGenreSchema = 
// TODO: Write a comment here explaining your choice
//choice option 6 because the relationship is many-many then must make another table 
//(general the name of this table is concatenate of the  2 tables name) have the gener-id --- make relationship between gener-id and gener table(id)
//and have author-id to make relatiopnship with author table