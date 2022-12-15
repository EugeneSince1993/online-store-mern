"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const controllers_1 = require("../controllers");
const middleware_1 = require("../middleware");
const middleware_2 = require("../middleware");
router.get('/', controllers_1.ProductController.getAll);
router.get('/get-range-extremes', controllers_1.ProductController.getRangeExtremes);
router.get('/:id', controllers_1.ProductController.getOne);
router.post('/', (0, middleware_1.checkRole)('ADMIN'), middleware_2.validation.productCreate, middleware_1.handleValidationErrors, controllers_1.ProductController.create);
router.delete('/:id', (0, middleware_1.checkRole)('ADMIN'), controllers_1.ProductController.remove);
router.patch('/:id', (0, middleware_1.checkRole)('ADMIN'), middleware_2.validation.productCreate, middleware_1.handleValidationErrors, controllers_1.ProductController.update);
exports.default = router;
//# sourceMappingURL=productRouter.js.map