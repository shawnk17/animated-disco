var express = require('express');
var router = express.Router();
let repo = require('../models/postRepository');

router.get('/', function (req, res, next) {
  res.render('blog', {
    title: 'Shawn Bloog Site',
    author: "Shawn",
    dataSource: repo.dataSource,
    postCount: repo.postCount(),
    posts: repo.getPosts()
  });
});

module.exports = router;