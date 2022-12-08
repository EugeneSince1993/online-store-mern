"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const multer_1 = __importDefault(require("multer"));
const uploadFile = (dest) => {
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
exports.uploadFile = uploadFile;
//# sourceMappingURL=uploadFile.js.map