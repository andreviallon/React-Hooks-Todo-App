const express = require('express');
const router = express.Router();
const { getTodos, addTodo, deleteTodo } = require('../controllers/todos');

router
    .route('/')
    .get(getTodos)
    .post(addTodo);

router
    .route('/:id')
    .delete(deleteTodo)

module.exports = router;
