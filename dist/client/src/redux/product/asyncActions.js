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
exports.fetchProductById = exports.fetchProducts = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const axios_1 = __importDefault(require("../../axios"));
const pickBy_1 = __importDefault(require("lodash/pickBy"));
const identity_1 = __importDefault(require("lodash/identity"));
exports.fetchProducts = (0, toolkit_1.createAsyncThunk)('product/fetchProducts', (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { sortBy, order } = params;
    const { data } = yield axios_1.default.get('products', {
        params: (0, pickBy_1.default)({
            sortBy,
            order,
        }, identity_1.default),
    });
    return data;
}));
exports.fetchProductById = (0, toolkit_1.createAsyncThunk)('product/fetchProductById', (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios_1.default.get(`products/${id}`);
    return data;
}));
//# sourceMappingURL=asyncActions.js.map