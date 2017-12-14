const fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, "data"),
    fileName = path.join(filePath, "postData.json");

let postList = [{ permalink: "post-1", title: "Post 1", postContent: "<h1>This is my first post</h1>", author: "jeffa"},
{ permalink: "post-2", title: "Post 2", postContent: "<h1>This is my second post</h1>", author: "jeffa"}];

// TODO load the array from the filesystem when this thing is initially loaded

let repo = {
    dataSource : "Filesystem",
    postCount: () => {
        return postList.length;
    },
    getPosts: () => {
        return postList;
    },
    getPostByPermalink: (permalink) => {
        return postList.find((post) => {
            return post.permalink === permalink;
        });
    },
    addPost: (newPost) => {
        postList.push(newPost);
        // TODO: Save the list to the filesystem
    }
};

module.exports = repo;