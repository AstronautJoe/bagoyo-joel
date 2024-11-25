const mongoose = require('mongoose');

// to make a new schema. Schema takes in an object
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// Todo is the assigned model name
const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo; // To be able to use it outside this file
