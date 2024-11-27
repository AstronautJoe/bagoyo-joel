import Blog from '../models/Blog.js';
// Create a new blog post
const createBlog = async (request, response) => {
  try {
    const { title, content } = request.body;

    const blog = await Blog.create({
      title,
      content,
      author: request.user._id,
    });
    response.status(201).json(blog);
  } catch (error) {
    response.status(500).json({ error: 'Server error at create blog' });
  }
};

// Get all blog posts
const getBlogs = async (request, response) => {
  try {
    const blogs = await Blog.find().populate('author', 'name');
    response.status(200).json(blogs);
  } catch (error) {
    response.status(500).json({ error: 'Server error' });
  }
};

// Get a blog post by ID
const getBlogById = async (request, response) => {
  try {
    const { id } = request.params;

    const blog = await Blog.findById(id).populate('author', 'name');
    if (!blog) return response.status(404).json({ error: 'Blog not found' });

    response.status(200).json(blog);
  } catch (error) {
    response.status(500).json({ error: 'Server error' });
  }
};

// Update a blog post by ID
const updateBlog = async (request, response) => {
  try {
    const { id } = request.params;
  } catch (error) {}
};

// Delete a blog post by ID

export { createBlog, getBlogs, getBlogById };
