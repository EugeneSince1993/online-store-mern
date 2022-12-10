"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productCreate = exports.register = exports.login = void 0;
const express_validator_1 = require("express-validator");
exports.login = [
    (0, express_validator_1.body)('email', 'Неверный формат почты').isEmail(),
    (0, express_validator_1.body)('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
];
exports.register = [
    (0, express_validator_1.body)('email', 'Неверный формат почты').isEmail(),
    (0, express_validator_1.body)('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
    (0, express_validator_1.body)('fullName', 'Укажите имя').isLength({ min: 3 }),
    (0, express_validator_1.body)('avatarUrl', 'Неверная ссылка на аватар').optional().isURL(),
];
exports.productCreate = [
    (0, express_validator_1.body)('brand', 'Введите название бренда').isLength({ min: 3 }),
    (0, express_validator_1.body)('name', 'Введите название товара').isLength({ min: 3 }),
    (0, express_validator_1.body)('price', 'Введите цену товара').isNumeric(),
    (0, express_validator_1.body)('memory', 'Введите объем памяти').isNumeric(),
    (0, express_validator_1.body)('ram', 'Введите объем оперативной памяти').isNumeric(),
    (0, express_validator_1.body)('cpuCores', 'Введите количество ядер').isNumeric(),
    (0, express_validator_1.body)('screenSize', 'Введите диагональ экрана').isNumeric(),
    (0, express_validator_1.body)('batteryCapacity', 'Введите ёмкость аккумулятора').isNumeric(),
    (0, express_validator_1.body)('color', 'Введите цвет устройства').isLength({ min: 3 }).isString(),
    (0, express_validator_1.body)('productCode', 'Введите артикул').isNumeric(),
    (0, express_validator_1.body)('description', 'Введите описание товара').isLength({ min: 30 }),
    (0, express_validator_1.body)('shortDesc', 'Введите краткое описание товара').isLength({ min: 10 }),
    (0, express_validator_1.body)('imageUrl', 'Добавьте ссылку на изображение товара').isLength({ min: 10 }),
    (0, express_validator_1.body)('images', 'Добавьте ссылки на изображения товара').isLength({ min: 20 }),
];
//# sourceMappingURL=validation.js.map