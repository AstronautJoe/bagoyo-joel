// to be able to access models
const Todo = require('../models/todoModel');

// takes in a request and response object
const createTodo = async (request, response) => {
  try {
    // destructure the request body
    const { title, description } = request.body;
    const todo = new Todo({
      title,
      description,
    });
    await todo.save();
    response.status(201).json(todo);
  } catch (error) {
    response.status(500).json({ error: 'Server error' });
  }
};
