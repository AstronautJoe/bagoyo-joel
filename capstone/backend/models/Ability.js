// Embedding the ability Schema since it is unique to the parent Schema
import mongoose from 'mongoose';

const abilitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  basicDescription: { type: String, required: true },
  // Disable for now to remove complexity
  // technicalDescription: {
  //   passive: { type: String },
  //   active: { type: String },
  // },
  cooldownPerLevel: [{ type: Number, required: true }],
  costPerLevel: {
    costAmount: [{ type: Number, required: true }],
    resourceType: { type: String, required: true },
  },
});

// const Abilities = mongoose.model('Abilities', abilitySchema);

export default abilitySchema;
