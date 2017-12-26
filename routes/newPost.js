let express = require('express');
let router = express.Router();
let repo = require('../models/postRepository');

router.get("/", (req, res, next) => {
    res.render('newpost', { title: 'New Post' });
});

router.post("/", (req, res, next) => {
    if (req.body.passphrase === "passphrase") {
        let newPost = {};

        newPost.title = req.body.title;
        newPost.permalink = req.body.permalink;
        newPost.postContent = req.body.postContent;
        newPost.author = req.body.author;

        repo.addPost(newPost);
    }
    res.redirect("/");
});

module.exports = router;