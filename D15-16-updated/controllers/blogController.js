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
    response
      .status(500)
      .json({ error: 'Server error, cannot create a blog post.' });
  }
};

// Get all blog posts
const getBlogs = async (request, response) => {
  try {
    const blogs = await Blog.find().populate('author', 'name');
    response.status(200).json(blogs);
  } catch (error) {
    response
      .status(500)
      .json({ error: 'Server error, cannot get all blog posts.' });
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
    response
      .status(500)
      .json({ error: 'Server error, cannot get blogpost by ID.' });
  }
};

// Update a blog post by ID
const updateBlogById = async (request, response) => {
  try {
    const { id } = request.params;
    const { title, content } = request.body;
    const blog = await Blog.findById(id);
    if (!blog) return response.status(404).json({ error: 'Blog not found' });
    // request.user.id -> is from the json web token
    if (blog.author.toString() !== request.user._id)
      return response.status(403).json({
        error: 'Authorization Error, Not authorized to update that blog post.',
      });
    blog.title = title || blog.title;
    blog.content = content || blog.content;
    await blog.save();
    response.status(200).json(blog);

    // checking request.user contents
    // console.log(request.user);
  } catch (error) {
    response
      .status(500)
      .json({ error: 'Server error, cannot update blog post.' });
  }
};

// Delete a blog post by ID
const deleteBlogById = async (request, response) => {
  try {
    const { id } = request.params;
    const blog = await Blog.findById(id);

    // console.log("User' id is: ", request.user._id);
    // console.log("Blog's author ID is: ", blog.author.toString());
    if (!blog) return response.status(404).json({ error: 'Blog not found' });

    if (blog.author.toString() !== request.user._id)
      return response.status(403).json({ error: 'Not authorized' });

    await blog.deleteOne(); // research on how to get debugging error that blog.remove() does not work or is deprecated
    response.status(200).json({ message: 'Blog deleted' });
  } catch (error) {
    response
      .status(500)
      .json({ error: 'Server Error, cannot delete blog post' });
  }
};


export { createBlog, getBlogs, getBlogById, updateBlogById, deleteBlogById };
