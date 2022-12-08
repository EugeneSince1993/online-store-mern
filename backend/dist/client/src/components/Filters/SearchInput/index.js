"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SearchInput_module_scss_1 = __importDefault(require("./SearchInput.module.scss"));
const SearchInput = () => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: SearchInput_module_scss_1.default.inputSearch }, { children: (0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "\u042F \u0438\u0449\u0443..." }) })));
};
exports.SearchInput = SearchInput;
//# sourceMappingURL=index.js.map