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

// the relation between publisher & authoer is many to many so we need 
// a seperate table to concatenate between these two tables


var sqlPublisherGenreSchema = Schemas.OPTION_4;
// TODO: Write a comment here explaining your choice

// the relation between publisher & Genre in one to many 
// so, every genre has many publisher so we need the id for 
// publisher to be a forign key in genre


var sqlAuthorGenreSchema = Schemas.OPTION_6;
// TODO: Write a comment here explaining your choice

// the relation between Genre & Author is many to many so we need 
// a seperate table to concatenate between these two tables
