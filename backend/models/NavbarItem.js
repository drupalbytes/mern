import mongoose from 'mongoose';

const NavbarItemSchema = new mongoose.Schema({
  label: { type: String, required: true },
  path: { type: String, required: true },
  order: { type: Number, default: 0 },
  isVisible: { type: Boolean, default: true },
});

export default mongoose.model('NavbarItem', NavbarItemSchema);
