import mongoose from 'mongoose';

const runeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    imageURL: { type: String, required: true },
    path: {
      type: String,
      enum: ['Domination', 'Precision', 'Resolve', 'Inspiration'],
      required: true,
    },
    // Slot 1, 2 and 3 have different sets of available runes to select from
    slot: {
      type: Number,
      enum: [1, 2, 3],
      required: true,
    },
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

const Rune = mongoose.model('Rune', runeSchema);

export { runeSchema };
export default Rune;
