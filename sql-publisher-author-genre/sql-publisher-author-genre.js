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
// option 6 
// the relation between publisher and auther is many to many 
// so publisher publish to many auther and auther use many publisher to publish his work 
// we create another table called publisher_auther has 
// an id_publisher as forgin key and id_author as forgin key 

var sqlPublisherGenreSchema = 
// TODO: Write a comment here explaining your choice
// option 4
// the realtiom between publisher and genre is one to many 
// each  publisher has one genre 
//  the id_genre is forgin key in publisher table 


var sqlAuthorGenreSchema = 
// TODO: Write a comment here explaining your choice
// option 6 
// the relation between genre and auther is many to many 
// so auther has many genre and genre has many auther 
// we create another table called auther_genre has 
// an id_genre as forgin key and id_author as forgin key 



