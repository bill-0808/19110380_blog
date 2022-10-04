const { blogs } = require('../models/blogModel');

function getBlog(req, res) {
    const id = Number(req.params.id);
    var blog;
    for (let i = 0; i < blogs.length; i++) {
        if (blogs[i].id == id) {
            blog = blogs[i];
        }
    }
    if (blog) {
        return blog;
    }
    else {
        res.send('not valid');
    }
}

function addNewBlog(req, res) {
    if (req.body.title.trim() != '' && req.body.content.trim() != '') {
        const newBlog = { id: parseInt(Date.now()), title: req.body.title.trim(), content: req.body.content.trim() };
        blogs.push(newBlog);
        res.redirect('/');
    }
    else {
        res.send('not valid')
    }
}

function deleteBlog(req, res) {
    const id = Number(req.params.id);
    for (let i = 0; i < blogs.length; i++) {
        if (blogs[i].id == id) {
            blogs.pop(blogs[i])
            res.redirect('/');
        }
    }
}

function editBlog(req, res) {
    const id = Number(req.params.id);
    for (let i = 0; i < blogs.length; i++) {
        if (blogs[i].id == id) {
            if (req.body.title.trim() != '' && req.body.content.trim() != '') {
                blogs[i] = { id: parseInt(Date.now()), title: req.body.title.trim(), content: req.body.content.trim() };
                res.redirect('/');
            }
            else {
                res.send('not valid')
            }
        }
    }
}

module.exports = {
    getBlog,
    addNewBlog,
    deleteBlog,
    editBlog
}