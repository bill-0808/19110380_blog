const { comments } = require('../models/commentModel');

function getComment(req, res) {
    const id = Number(req.params.id);
    var comment = [];
    for (let i = 0; i < comments.length; i++) {
        if (comments[i].blog_id == id) {
            comment.push(comments[i]) ;
        }
    }
    if (comment) {
        return comment;
    }
    else {
        res.send('not valid');
    }
}

function addNewComment(req, res) {
    if (req.body.comment.trim() != '') {
        const newComment = { id: parseInt(Date.now()), blog_id: req.body.blog_id, content: req.body.comment.trim() };
        comments.push(newComment);
        res.redirect('/blog/' + req.body.blog_id)
    }
    else {
        res.send('not valid')
    }
}

module.exports = {
    getComment,
    addNewComment
}