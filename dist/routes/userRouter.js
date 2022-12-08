"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const middleware_1 = require("../middleware");
const middleware_2 = require("../middleware");
const router = express_1.default.Router();
router.post('/login', middleware_2.validation.login, middleware_1.handleValidationErrors, controllers_1.UserController.login);
router.post('/register', middleware_2.validation.register, middleware_1.handleValidationErrors, controllers_1.UserController.register);
router.get('/me', middleware_1.checkAuth, controllers_1.UserController.getMe);
exports.default = router;
//# sourceMappingURL=userRouter.js.map