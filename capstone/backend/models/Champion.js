import mongoose from 'mongoose';
import abilitySchema from './Ability.js';

const championSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    image: {
      large: { type: String, required: true },
      thumbnail: { type: String, required: true },
    },
    mainRole: { type: String, required: true },
    secondaryRole: { type: String },
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

export default Champion;
