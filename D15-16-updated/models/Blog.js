import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // references User model
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Blog', BlogSchema);
