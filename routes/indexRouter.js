const express = require('express');
const router = express.Router();
const blogs = require('../models/blogModel')

router.get('/', (req, res, next) => {
    res.render('home', { blogs: blogs });
});

module.exports = router