import mongoose from 'mongoose';

const itemPassiveSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const ItemPassive = mongoose.model('ItemPassive', itemPassiveSchema);

export { itemPassiveSchema };
export default ItemPassive;
