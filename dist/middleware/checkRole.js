"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = (role) => {
    return (req, res, next) => {
        const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
        if (token) {
            try {
                const decoded = jsonwebtoken_1.default.verify(token, 'secret123');
                if (decoded.role !== role) {
                    return res.status(403).json({
                        message: 'С вашей ролью нет доступа',
                    });
                }
                req.user = decoded;
                next();
            }
            catch (err) {
                return res.status(403).json({
                    message: 'Нет доступа из-за роли',
                });
            }
        }
        else {
            return res.status(401).json({
                message: 'Не авторизован',
            });
        }
    };
};
//# sourceMappingURL=checkRole.js.map