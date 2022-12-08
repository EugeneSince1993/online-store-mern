"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
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
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: Search_module_scss_1.default.search }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Search_module_scss_1.default.searchContainer }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: Search_module_scss_1.default.searchInput }, { children: (0, jsx_runtime_1.jsx)("input", { type: "text", value: value, onChange: onInputChange, onKeyDown: handleOnEnter, placeholder: "\u042F \u0438\u0449\u0443..." }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Search_module_scss_1.default.searchIcon, onClick: () => updateSearchValue(value) }, { children: (0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-magnifying-glass" }) }))] })) })));
};
exports.Search = Search;
//# sourceMappingURL=index.js.map