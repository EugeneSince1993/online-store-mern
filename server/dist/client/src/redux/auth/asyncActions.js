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
exports.fetchAuthMe = exports.fetchRegister = exports.fetchAuth = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const axios_1 = __importDefault(require("../../axios"));
exports.fetchAuth = (0, toolkit_1.createAsyncThunk)('auth/fetchAuth', (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios_1.default.post('auth/login', params);
    return data;
}));
exports.fetchRegister = (0, toolkit_1.createAsyncThunk)('auth/fetchRegister', (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios_1.default.post('auth/register/', params);
    return data;
}));
exports.fetchAuthMe = (0, toolkit_1.createAsyncThunk)('auth/fetchAuthMe', () => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios_1.default.get('auth/me');
    return data;
}));
//# sourceMappingURL=asyncActions.js.map