"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const middleware_1 = require("../middleware");
const utils_1 = require("../utils");
const router = express_1.default.Router();
router.use('/thumbnail', express_1.default.static('uploads/thumbnail'));
router.use('/images', express_1.default.static('uploads/images'));
router.post('/thumbnail', middleware_1.checkAuth, (0, utils_1.uploadFile)('thumbnail').single('inputFile'), (req, res) => {
    res.json({
        url: `/api/uploads/thumbnail/${req.file.originalname}`
    });
});
router.post('/images', middleware_1.checkAuth, (0, utils_1.uploadFile)('images').fields([{ name: 'inputFiles', maxCount: 5 }]), (req, res) => {
    res.json({
        files: req.files['inputFiles']
    });
});
router.delete('/', middleware_1.checkAuth, controllers_1.ProductController.deleteImage);
exports.default = router;
//# sourceMappingURL=uploadRouter.js.map