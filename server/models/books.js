/*Student Name: Benzir Ahmed
  Student ID: 300-727-117
  Class: COMP308-W2017
  APP: Books List
  Midterm 1*/
  
let mongoose = require('mongoose');

// create a model class
let gamesSchema = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('books', gamesSchema);
