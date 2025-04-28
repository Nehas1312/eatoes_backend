import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  imageUrl: String
});

export default mongoose.model('MenuItem', menuItemSchema);
