"use strict";
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
exports.getRangeExtremes = exports.remove = exports.update = exports.create = exports.getOne = exports.getAll = void 0;
const Product_1 = __importDefault(require("../models/Product"));
const mongoose = require('mongoose');
const newId = mongoose.Types.ObjectId();
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sortQuery = req.query.order;
        console.log(sortQuery);
        let sortObject = {};
        if (req.query.sortBy === "rating") {
            sortObject["rating"] = sortQuery;
        }
        else if (req.query.sortBy === "price") {
            sortObject["price"] = sortQuery;
        }
        else if (req.query.sortBy === "name") {
            sortObject["name"] = sortQuery;
        }
        const products = yield Product_1.default
            .find({})
            .sort(sortObject)
            .exec();
        res.json(products);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось получить товары',
        });
    }
});
exports.getAll = getAll;
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.id;
        Product_1.default.findOneAndUpdate({
            _id: productId,
        }, {
            returnDocument: 'after',
        }, (err, doc) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: 'Не удалось вернуть товар',
                });
            }
            if (!doc) {
                return res.status(404).json({
                    message: 'Товар не найден',
                });
            }
            res.json(doc);
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось получить товары',
        });
    }
});
exports.getOne = getOne;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doc = new Product_1.default({
            user: req.userId,
            _id: newId,
            imageUrl: req.body.imageUrl,
            images: req.body.images.split(' '),
            brand: req.body.brand,
            name: req.body.name,
            price: req.body.price,
            memory: req.body.memory,
            ram: req.body.ram,
            cpuCores: req.body.cpuCores,
            screenSize: req.body.screenSize,
            batteryCapacity: req.body.batteryCapacity,
            color: req.body.color,
            productCode: req.body.productCode,
            description: req.body.description,
            shortDesc: req.body.shortDesc,
        });
        const product = yield doc.save();
        res.json(product);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось создать товар',
        });
    }
});
exports.create = create;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.id;
        yield Product_1.default.updateOne({
            _id: productId
        }, {
            user: req.userId,
            imageUrl: req.body.imageUrl,
            images: req.body.images,
            brand: req.body.brand,
            name: req.body.name,
            price: req.body.price,
            memory: req.body.memory,
            ram: req.body.ram,
            cpuCores: req.body.cpuCores,
            screenSize: req.body.sreenSize,
            batteryCapacity: req.body.batteryCapacity,
            color: req.body.color,
            productCode: req.body.productCode,
            description: req.body.description,
            shortDesc: req.body.shortDesc,
        });
        res.json({
            success: true,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось обновить товар',
        });
    }
});
exports.update = update;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.id;
        Product_1.default.findOneAndDelete({
            _id: productId,
        }, (err, doc) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: 'Не удалось удалить товар',
                });
            }
            if (!doc) {
                return res.status(404).json({
                    message: 'Товар не найден',
                });
            }
            res.json({
                success: true,
            });
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось получить товары',
        });
    }
});
exports.remove = remove;
const getRangeExtremes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const minPriceRaw = yield Product_1.default
            .find({})
            .sort({ price: 'asc' })
            .limit(1)
            .select('price -_id')
            .exec();
        const minPrice = minPriceRaw[0]["price"];
        const maxPriceRaw = yield Product_1.default
            .find({})
            .sort({ price: 'desc' })
            .limit(1)
            .select('price -_id')
            .exec();
        const maxPrice = maxPriceRaw[0]["price"];
        const priceExtremes = {
            minPrice,
            maxPrice
        };
        const minScreenSizeRaw = yield Product_1.default
            .find({})
            .sort({ screenSize: 'asc' })
            .limit(1)
            .select('screenSize -_id')
            .exec();
        const minScreenSize = minScreenSizeRaw[0]["screenSize"];
        const maxScreenSizeRaw = yield Product_1.default
            .find({})
            .sort({ screenSize: 'desc' })
            .limit(1)
            .select('screenSize -_id')
            .exec();
        const maxScreenSize = maxScreenSizeRaw[0]["screenSize"];
        const screenSizeExtremes = {
            minScreenSize,
            maxScreenSize
        };
        const minBatteryCapacityRaw = yield Product_1.default
            .find({})
            .sort({ batteryCapacity: 'asc' })
            .limit(1)
            .select('batteryCapacity -_id')
            .exec();
        const minBatteryCapacity = minBatteryCapacityRaw[0]["batteryCapacity"];
        const maxBatteryCapacityRaw = yield Product_1.default
            .find({})
            .sort({ batteryCapacity: 'desc' })
            .limit(1)
            .select('batteryCapacity -_id')
            .exec();
        const maxBatteryCapacity = maxBatteryCapacityRaw[0]["batteryCapacity"];
        const batteryCapacityExtremes = {
            minBatteryCapacity,
            maxBatteryCapacity
        };
        const rangeExtremes = {
            priceExtremes,
            screenSizeExtremes,
            batteryCapacityExtremes
        };
        res.json(rangeExtremes);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось получить товары',
        });
    }
});
exports.getRangeExtremes = getRangeExtremes;
//# sourceMappingURL=ProductController.js.map