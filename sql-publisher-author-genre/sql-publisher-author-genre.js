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

var sqlPublisherAuthorSchema = SELECT * FROM publisher
JOIN author USING (genre);
// TODO: Write a comment here explaining your choice

var sqlPublisherGenreSchema = SELECT * FROM publisher
JOIN genre USING (author);
// TODO: Write a comment here explaining your choice

var sqlAuthorGenreSchema = SELECT * FROM author
JOIN genre USING (publisher);
// TODO: Write a comment here explaining your choice
