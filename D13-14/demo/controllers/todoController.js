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

const getAllTodos = async (request, response) => {
  try {
    const todos = await Todo.find();
    response.status(200).json(todos);
  } catch (error) {
    response.status(500).json({ error: 'Server error' });
  }
};

const getTodoById = async (request, response) => {
  try {
    const { id } = request.params; //destructure
    const todo = await Todo.findById(id);
    if (!todo) {
      return response.status(404).json({ error: 'Todo not found' });
    }
    response.status(200).json(todo);
  } catch (error) {
    response.status(500).json({ error: 'Server error' });
  }
};

// Update Todo
const updateTodo = async (request, response) => {
  try {
    const { id } = request.params; //get id from the request params
    const { title, description } = request.body; //get title and description from the body
    const updatedTodo = await Todo.findByIdAndUpdate(id, {
      //MongoDB model has a built in method for updating
      title,
      description,
    });
    if (!updatedTodo) {
      return response.status(404).json({ error: 'Todo not found' });
    }
    response.status(200).json(updateTodo);
  } catch (error) {
    response.status(500).json({ error: 'Server error' });
  }
};

// Delete Todo
const deleteTodo = async (request, response) => {
  try {
    const { id } = request.params; //get id from the request params
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return response.status(404).json({ error: 'Todo not found' });
    }
    response.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error) {
    response.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo
};
