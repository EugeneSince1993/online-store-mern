"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const express_1 = __importDefault(require("express"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const multer_1 = __importDefault(require("multer"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const path = require('path');
const index_1 = require("./controllers/index");
const validations_1 = require("./validations");
const utils_1 = require("./utils");
const url = process.env.MONGO_URI;
let port = process.env.PORT || 5000;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default
            .connect(url)
            .then(() => console.log('DB ok'))
            .catch((err) => console.log('DB error', err));
        const app = (0, express_1.default)();
        const uploadFunc = (dest) => {
            const storage = multer_1.default.diskStorage({
                destination: (req, file, callback) => {
                    const path = `./uploads/${dest}`;
                    if (!fs_extra_1.default.existsSync(path)) {
                        fs_extra_1.default.mkdirSync(path);
                    }
                    callback(null, path);
                },
                filename: (req, file, callback) => {
                    callback(null, file.originalname);
                },
            });
            const upload = (0, multer_1.default)({ storage });
            return upload;
        };
        app.use(express_1.default.json());
        app.use((0, cors_1.default)());
        app.use('/uploads/thumbnail', express_1.default.static('uploads/thumbnail'));
        app.use('/uploads/images', express_1.default.static('uploads/images'));
        app.post('/auth/login', validations_1.loginValidation, utils_1.handleValidationErrors, index_1.UserController.login);
        app.post('/auth/register', validations_1.registerValidation, utils_1.handleValidationErrors, index_1.UserController.register);
        app.get('/auth/me', utils_1.checkAuth, index_1.UserController.getMe);
        app.post('/uploads/thumbnail', utils_1.checkAuth, uploadFunc('thumbnail').single('inputFile'), (req, res) => {
            res.json({
                url: `/uploads/thumbnail/${req.file.originalname}`
            });
        });
        app.post('/uploads/images', utils_1.checkAuth, uploadFunc('images').fields([{ name: 'inputFiles', maxCount: 5 }]), (req, res) => {
            res.json({
                files: req.files['inputFiles']
            });
        });
        app.delete('/uploads', utils_1.checkAuth, index_1.ProductController.deleteImage);
        app.get('/products', index_1.ProductController.getAll);
        app.get('/products/:id', index_1.ProductController.getOne);
        app.post('/products', utils_1.checkAuth, validations_1.productCreateValidation, utils_1.handleValidationErrors, index_1.ProductController.create);
        app.delete('/products/:id', utils_1.checkAuth, index_1.ProductController.remove);
        app.patch('/products/:id', utils_1.checkAuth, validations_1.productCreateValidation, utils_1.handleValidationErrors, index_1.ProductController.update);
        app.get('/get-range-extremes', index_1.ProductController.getRangeExtremes);
        if (process.env.NODE_ENV === 'production') {
            app.use(express_1.default.static('client/build'));
            app.get('*', (req, res) => {
                res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
            });
        }
        app.listen(port, () => {
            console.log(`Server is successfully running on port ${port}`);
        });
    });
}
main().catch(err => console.log(err));
//# sourceMappingURL=index.js.map