const express = require('express');
const router = express.Router();
const {addNewComment} = require('../controllers/commentController')

router.post('/add', addNewComment);

module.exports = router