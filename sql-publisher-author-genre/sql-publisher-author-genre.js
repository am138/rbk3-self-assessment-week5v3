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

var sqlPublisherAuthorSchema = Shemas.OPTION_6 ;
// TODO: Write a comment here explaining your choice
//because the relation between publisher And author is many to many
// and in this case we should creat new table contain the primary key (publesher)
// and the primary key (auther) as forgn keys (combose key)


var sqlPublisherGenreSchema = Shemas.OPTION_4;
// TODO: Write a comment here explaining your choice
//because the relation between publisher And genre is many to one
// and in this case we should add primary key (genre) inside the 
//publisher table as a forgen key




var sqlAuthorGenreSchema = Shemas.OPTION_6 ;
// TODO: Write a comment here explaining your choice
//because the relation between genre And author is many to many
// and in this case we should creat new table contain the primary key (genre)
// and the primary key (auther) as forgn keys (combose key)
