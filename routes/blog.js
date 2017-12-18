var express = require('express');
var router = express.Router();
let repo = require('../models/postRepository');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('blog', {
      title: 'Shawn BLog Site',
      author: "shawn",
      dataSource: repo.dataSource,
      postCount: repo.postCount(),
      posts: repo.getPosts()
    });
  });
  

module.exports = router;