const express = require('express');
const router = express.Router();
const {BOOKS} = require('../models/index.js');
const controller = require('../controllers/book.controller')

router.get('/' , controller.getAllBooks)

router.get('/:id' , controller.getBookById)

router.post('/' , controller.createBook)

router.delete('/:id' , controller.deleteBookById)

module.exports = router;
