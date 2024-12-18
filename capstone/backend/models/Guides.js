import mongoose from 'mongoose';
import abilitySchema from './Ability.js';

const guideSchema = new mongoose.Schema();
//   {
//     name: { type: String, required: true, unique: true },
//     title: { type: String, required: true },
//     assets: {
//       imageThumbnail: { type: String, required: true },
//       videoMP4: { type: String, required: true },
//       videoWEBM: { type: String, required: true },
//     },
//     mainRole: { type: String, required: true },
//     secondaryRole: { type: String },
//     passive: {
//       name: {
//         type: String,
//         required: true,
//       },
//       basicDescription: {
//         type: String,
//         required: true,
//       },
//     },
//     abilities: [abilitySchema],
//   },
//   { timestamps: true }

const Guide = mongoose.model('Guide', guideSchema);

export default Guide;
