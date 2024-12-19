import mongoose from 'mongoose';
import { itemPassiveSchema } from './ItemPassive.js';

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    imageURL: { type: String, required: true },
    category: {
      type: String,
      enum: [
        'Basic',
        'Mid-tier',
        'Upgraded',
        'Trinkets',
        'Boots',
        'Enchantments',
      ],
      required: true,
    },
    attributes: {
      attackDamage: { type: Number, default: 0 },
      abilityPower: { type: Number, default: 0 },
      armor: { type: Number, default: 0 },
      magicResist: { type: Number, default: 0 },
      criticalHitChance: { type: Number, default: 0 },
      attackSpeed: { type: Number, default: 0 },
      health: { type: Number, default: 0 },
      mana: { type: Number, default: 0 },
      healthRegen: { type: Number, default: 0 },
      manaRegen: { type: Number, default: 0 },
      abilityHaste: { type: Number, default: 0 },
      lethality: { type: Number, default: 0 },
      magicPenetration: { type: Number, default: 0 },
      lifesteal: { type: Number, default: 0 },
      omnivamp: { type: Number, default: 0 },
      physicalVamp: { type: Number, default: 0 },
      tenacity: { type: Number, default: 0 },
    },
    uniquePassives: { type: [itemPassiveSchema], required: false },
    tags: [
      {
        type: String,
        enum: ['Physical', 'Magic', 'Defense', 'Boots', 'Enchantments'],
      },
    ],
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Item = mongoose.model('Item', itemSchema);

export { itemSchema };
export default Item;
