let express = require('express');
let router = express.Router();
let repo = require('../models/postRepository');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Shawn Bloog Site',
    author: "Shawn",
  });
});

module.exports = router;