const fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, "data"),
    fileName = path.join(filePath, "postData.json");

let postList = [{ permalink: "post-1", title: "Post 1", postContent: "<h1>This is my first post</h1>", author: "shawn"},
{ permalink: "post-2", title: "Post 2", postContent: "<h1>This is my second post</h1>", author: "shawn"}];

let loadPosts = () => {
    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            console.error("Error loading data file: " + err.message);
            throw err;
        } else {
            let newPostsArr = JSON.parse(data);
            if (newPostsArr.length > 0) {
                postList = newPostsArr;
            }
        }
    });
};

let savePosts = () => {
    fs.writeFile(fileName, JSON.stringify(postList), (err) => {
        if (err) {
            console.error("Error writing the file." + err.message);
            throw err;
        }
        console.log("The file has been saved.");
    });
};

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
    }
};

module.exports = repo;