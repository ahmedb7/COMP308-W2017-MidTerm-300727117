/*Student Name: Benzir Ahmed
  Student ID: 300-727-117
  Class: COMP308-W2017
  APP: Books List
  Midterm 1*/
// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
