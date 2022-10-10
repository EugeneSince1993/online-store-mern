import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    _id: String,
    imageUrl: String,
    images: Array,
    name: String,
    price: Number,
    rating: Number,
    testimonials: Number,
    brand: String,
    memory: Number,
    ram: Number,
    cpuCores: Number,
    screenSize: Number,
    batteryCapacity: Number,
    color: String,
    productCode: Number,
    specifications: Array,
    description: String,
    shortDesc: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Product', ProductSchema);