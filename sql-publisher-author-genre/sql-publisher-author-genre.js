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
//if all cases in the read me related then (option 6) will be true since we have 1 to many relationship between authors and publishers and many to 1 between publisher and author ,then we need to create new table to this relation holds the primary key for each table 

var sqlPublisherGenreSchema = 
// TODO: Write a comment here explaining your choice
//(option 4) because the relationship 1 to 1 between publisher and genre and 1 to many between genre and publisher. so we will set the primary key col  in genre as foriegn key in publisher 


var sqlAuthorGenreSchema = 
// TODO: Write a comment here explaining your choice
//(option 6)  because we have 1 to many relationship between author and genre and many to 1 between author and genre ,so we need to create new table to this relation holds the primary key for each table 
