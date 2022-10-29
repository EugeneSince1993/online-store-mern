import { body } from 'express-validator';

export const loginValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
];

export const registerValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
  body('fullName', 'Укажите имя').isLength({ min: 3 }),
  body('avatarUrl', 'Неверная ссылка на аватар').optional().isURL(),
];

export const productCreateValidation = [
  body('brand', 'Введите название бренда').isLength({ min: 3 }),
  body('name', 'Введите название товара').isLength({ min: 3 }),
  body('price', 'Введите цену товара').isNumeric(),
  body('memory', 'Введите объем памяти').isNumeric(),
  body('ram', 'Введите объем оперативной памяти').isNumeric(),
  body('cpuCores', 'Введите количество ядер').isNumeric(),
  body('screenSize', 'Введите диагональ экрана').isNumeric(),
  body('batteryCapacity', 'Введите ёмкость аккумулятора').isNumeric(),
  body('color', 'Введите цвет устройства').isLength({ min: 3 }).isString(),
  body('productCode', 'Введите артикул').isNumeric(),
  body('description', 'Введите описание товара').isLength({ min: 30 }),
  body('shortDesc', 'Введите краткое описание товара').isLength({ min: 10 }),
  body('imageUrl', 'Добавьте ссылку на изображение товара').isLength({ min: 10 }),
  body('images', 'Добавьте ссылки на изображения товара').isLength({ min: 20 }),
];