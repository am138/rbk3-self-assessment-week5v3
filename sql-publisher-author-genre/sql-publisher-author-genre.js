var Schemas = {
  OPTION_0: 'option 6',
  OPTION_1: 'option 4',
  OPTION_2: 'option 6'
};


var sqlPublisherAuthorSchema = Schemas.OPTION_0
// the publisher has many authors
//author, has many publishers
// the relationship is many to many 
// therefore there should be a middle table named (publisher-author)
// this will function as a link between the two tables and it will
// contain an id, the id of the author and the id of the publisher 
// from the authoer table / publisher table
// i choose option number 6 

var sqlPublisherGenreSchema = Schemas.OPTION_1
// publisher has one genre
//genre, has many publishers,
// the relationship is one to many 
// the publisher table will contain a forgien key collomn (genre id)
//comming from the genre table
// i choose option number 4

var sqlAuthorGenreSchema = Schemas.OPTION_2
//author has many genres
//genre, has many authors
// the relationship is many to many
// therefore there should be a middle table linking the two tables
// named (author-genre) where this table contains three collomns 
// an id, the id of the author from the authors table
// the id of the genre from the genre table 
// i choose option number 6 