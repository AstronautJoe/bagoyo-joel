// Embedding the ability Schema since it is unique to the parent Schema
import mongoose from 'mongoose';

const spellSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    cooldown: { type: Number, required: true },
  },
  { timestamps: true }
);

const Spell = mongoose.model('Spells', spellSchema);

export { spellSchema }; // Named export
export default Spell; // Default export
