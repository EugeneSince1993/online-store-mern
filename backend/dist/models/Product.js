"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ProductSchema = new mongoose_1.default.Schema({
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
    description: String,
    shortDesc: String,
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model('Product', ProductSchema);
//# sourceMappingURL=Product.js.map