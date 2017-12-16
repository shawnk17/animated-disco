let express = require('express');
let router = express.Router();
let repo = require('../models/postRepository');

// GET sends the user the new post page with the form to enter the post
router.get("/", (req, res, next) => {
    res.render('newpost', { title: 'New Post' });
});

// POST receives the data from the user about the new post
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

// res.render('/.edit').click(function(){
//     (this).hide();
//     ('/.box').addClass('editable');
//     ('/.text').attr('contenteditable', 'true');  
//     ('/.save').show();
//     res.redirect("/");
//   });
  
//   res.render('.save').click(function(){
//     (this).hide();
//     ('/.box').removeClass('editable');
//     ('/.text').removeAttr('contenteditable');
//     ('/.edit').show();
//     res.redirect("/");
//   });
  

module.exports = router;
