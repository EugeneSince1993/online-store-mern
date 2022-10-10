"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchInput = void 0;
const SearchInput_module_scss_1 = __importDefault(require("./SearchInput.module.scss"));
const SearchInput = () => {
    return (<div className={SearchInput_module_scss_1.default.inputSearch}>
      <input type="text" placeholder="Я ищу..."/>
    </div>);
};
exports.SearchInput = SearchInput;
//# sourceMappingURL=index.js.map