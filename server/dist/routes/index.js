"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productRouter_1 = __importDefault(require("./productRouter"));
const userRouter_1 = __importDefault(require("./userRouter"));
const uploadRouter_1 = __importDefault(require("./uploadRouter"));
const router = express_1.default.Router();
router.use('/products', productRouter_1.default);
router.use('/auth', userRouter_1.default);
router.use('/uploads', uploadRouter_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map