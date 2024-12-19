import mongoose from 'mongoose';

const keyStoneSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    imageURL: { type: String, required: true },
    description: { type: String, required: true },
    cooldown: {
      time: { type: Number, required: false },
      unit: {
        type: String,
        enum: ['minutes', 'seconds'],
        required: false,
      },
    },
  },
  { timestamps: true }
);

const KeyStone = mongoose.model('KeyStone', keyStoneSchema);

export { keyStoneSchema };
export default KeyStone;
