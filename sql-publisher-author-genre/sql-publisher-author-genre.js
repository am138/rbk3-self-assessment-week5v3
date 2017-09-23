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

// bacause the relation between the two tables is many to many so i have to put third table to implent the relationship as on to many betwwen thr to tasbles and the third table :


var sqlPublisherGenreSchema = Schemas.OPTION_4;
// TODO: Write a comment here explaining your choice
//because the relationship is one to many between the tables so we have to put the primary key of gere as foriegn key inside publishe table :why to do that i mean the relationship itself just to keep trak the Publisher which Genre have  and implement the databases mangment systems concepts 

var sqlAuthorGenreSchema =Schemas.OPTION_6; 
// TODO: Write a comment here explaining your choice
// because the relation ship is many to many between the tables so i need a third table to broke it to two one to many relationships this table will contain the ids of the other tables 
