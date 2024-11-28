import Comment from '../models/Comment.js';
import Blog from '../models/Blog.js';

const addComment = async (request, response) => {
  try {
    const { blogId } = request.params;
    const { commentText } = request.body;
    const blog = await Blog.findById(blogId);

    console.log("User's id is: ", request.user._id);
    console.log("Blog's id is: ", blogId);

    if (!blog) {
      return response.status(404).json({ error: 'Blog post not found' });
    }

    const comment = await Comment.create({
      text: commentText,
      blog: blogId,
      user: request.user._id,
    });

    response.status(201).json(comment);
  } catch (error) {
    response
      .status(500)
      .json({ error: 'Server error, cannot create a comment.' });
  }
};

const getCommentsByBlog = async (request, response) => {
  try {
    const { blogId } = request.params;
    const comments = await Comment.find({ blog: blogId }).populate([
      { path: 'blog', select: 'content' },
      { path: 'user', select: 'name' },
    ]);
    if (!comments) {
      return response.status(404).json({ error: 'Blog post not found' });
    }
    response.status(200).json(comments);
  } catch (error) {
    response
      .status(500)
      .json({ error: 'Server error, cannot retrieve comments.' });
  }
};

const deleteCommentById = async (request, response) => {
  try {
    const { commentId } = request.params;
    const comment = await Comment.findById(commentId).populate({
      path: 'user',
      select: 'name',
    });
    if (!comment) {
      return response.status(404).json({ error: 'Comment not found!' });
    }
    if (comment.user._id !== request.user._id) {
      return response
        .status(404)
        .json({ error: 'Not authorized to delete that comment' });
    }
    
  } catch (error) {
    response
      .status(500)
      .json({ error: 'Server error, cannot delete a comment.' });
  }
};

export { addComment, getCommentsByBlog, deleteCommentById };
