import mongoose from 'mongoose';
import { abilitySchema } from './Ability.js';

const championSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    assets: {
      imageThumbnail: { type: String, required: true },
      videoMP4: { type: String, required: true },
      videoWEBM: { type: String, required: true },
    },
    mainRole: {
      type: String,
      enum: ['Duo', 'Support', 'Baron', 'Jungle', 'Mid'],
      required: true,
    },
    secondaryRole: {
      type: String,
      enum: ['Duo', 'Support', 'Baron', 'Jungle', 'Mid'],
    },
    passive: {
      name: {
        type: String,
        required: true,
      },
      basicDescription: {
        type: String,
        required: true,
      },
    },
    abilities: [abilitySchema],
  },
  { timestamps: true }
);

const Champion = mongoose.model('Champion', championSchema);

export { championSchema }; // Named export
export default Champion;   // Default export
