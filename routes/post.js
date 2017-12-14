let express = require('express'),
    router = express.Router(),
    repo = require("../models/postRepository");

router.get('/:permalink', (req,res,next) => {
    var post = repo.getPostByPermalink(req.params.permalink);
    res.render('post', { title: post.title, post: post });
});

module.exports = router;