const express = require('express');
const router = express.Router();
const { getBlog, addNewBlog, editBlog, deleteBlog } = require('../controllers/blogController')
const { getComment } = require('../controllers/commentController')

router.get('/create', (req, res, next) => {
    res.render('createOrEdit');
});

router.get('/:id', (req, res, next) => {
    res.render('detail', { blog: getBlog(req, res), comment: getComment(req, res) });
});

router.get('/:id/edit', (req, res, next) => {
    res.render('createOrEdit', { data: getBlog(req, res) });
});

router.post('/create', addNewBlog);
router.put('/:id/edit', editBlog);
router.delete('/:id/delete', deleteBlog);

module.exports = router