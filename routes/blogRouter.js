const express = require('express');
const router = express.Router();
const blogs = require('../models/blogModel')
const { getBlog } = require('../controllers/blogController')

router.get('/create', (req, res, next) => {
    res.render('createOrEdit');
});

router.get('/:id', (req, res, next) => {
    res.render('detail', { data: getBlog(req, res) });
});

router.get('/:id/edit', (req, res, next) => {
    res.render('createOrEdit', { data: getBlog(req, res) });
});

module.exports = router