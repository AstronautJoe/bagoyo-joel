// Embedding the ability Schema since it is unique to the parent Schema
import mongoose from 'mongoose';

const abilitySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    basicDescription: { type: String, required: true },
    cooldownPerLevel: [{ type: Number, required: true }],
    // To account for Soraka's mixed resource cost like '10% max health + 50 Mana' we will be using nested arrays
    costPerLevel: [
      [
        {
          amount: { type: Number, required: true },
          isPercentage: { type: Boolean, required: true, default: false },
          resourceType: {
            type: String,
            required: true,
            enum: ['mana', 'health', 'energy', 'max-mana', 'max-health', 'max-energy', 'no-cost'],
          },
        },
      ],
    ],
  },
  { timestamps: true }
);

const Ability = mongoose.model('Abilities', abilitySchema);

export { abilitySchema }; // Named export
export default Ability; // Default export
