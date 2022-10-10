"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = void 0;
const react_1 = __importStar(require("react"));
const hooks_1 = require("../../../redux/hooks");
const filterSlice_1 = require("../../../redux/filter/filterSlice");
const Search_module_scss_1 = __importDefault(require("./Search.module.scss"));
const Search = () => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const [value, setValue] = (0, react_1.useState)('');
    const onInputChange = (e) => {
        setValue(e.target.value.toLocaleLowerCase());
    };
    const updateSearchValue = (val) => {
        dispatch((0, filterSlice_1.setSearchValue)(val));
        dispatch((0, filterSlice_1.setCurrentPage)(1));
    };
    const handleOnEnter = (e) => {
        if (e.key === "Enter") {
            updateSearchValue(value);
        }
    };
    (0, react_1.useEffect)(() => {
        if (value === '') {
            updateSearchValue('');
        }
    }, [value]);
    return (<div className={Search_module_scss_1.default.search}>
      <div className={Search_module_scss_1.default.searchContainer}>
        <div className={Search_module_scss_1.default.searchInput}>
          <input type="text" value={value} onChange={onInputChange} onKeyDown={handleOnEnter} placeholder="Я ищу..."/>
        </div>
        <div className={Search_module_scss_1.default.searchIcon} onClick={() => updateSearchValue(value)}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>);
};
exports.Search = Search;
//# sourceMappingURL=index.js.map