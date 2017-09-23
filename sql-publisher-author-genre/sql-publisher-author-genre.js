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
/*	I choosed "option 6" because the relationship
	between the Auther and the Publisher is many to many 
	so we need the third table "publisher_auther";
*/

var sqlPublisherGenreSchema = 
// TODO: Write a comment here explaining your choice
/*	I choosed "option 4" because the relationship
	between the Gener and the Publisher is one to many 
	so we need a forgin key for the Gener id in the 
	Publisher table;
*/

var sqlAuthorGenreSchema = 
// TODO: Write a comment here explaining your choice
/*	I choosed "option 6" because the relationship
	between the Auther and the Gener is many to many 
	so we need the third table "Auther_Gener";
*/
