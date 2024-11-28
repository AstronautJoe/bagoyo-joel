import express from 'express';
import {
  addComment,
  getCommentsByBlog,
  deleteCommentById,
} from '../controllers/commentController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Routes
router.post('/:blogId', authMiddleware, addComment);
router.get('/:blogId', getCommentsByBlog);
router.delete('/:commentId', authMiddleware, deleteCommentById);

export default router;
