"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filters = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Filters_module_scss_1 = __importDefault(require("./Filters.module.scss"));
const Collapse_1 = require("../Collapse");
const MultiRangeSliderInputs_1 = require("./MultiRangeSliderInputs");
const CheckboxList_1 = require("./CheckboxList");
const FilterColor_1 = require("./FilterColor");
const Filters = ({ handleChange, setFirstPage, brandsArr, memoryArr, ramArr, cpuCoresArr, colorsArr }) => {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Filters_module_scss_1.default.filtersContainer }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: Filters_module_scss_1.default.filterBrand }, { children: (0, jsx_runtime_1.jsx)(Collapse_1.Collapse, Object.assign({ filterName: "\u0411\u0440\u0435\u043D\u0434", elementType: "h5" }, { children: (0, jsx_runtime_1.jsx)(CheckboxList_1.CheckboxList, { handleChange: handleChange, itemType: "brand", paramArr: brandsArr }) })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Filters_module_scss_1.default.filterPrice }, { children: (0, jsx_runtime_1.jsx)(Collapse_1.Collapse, Object.assign({ filterName: "\u0426\u0435\u043D\u0430, \u20BD", elementType: "h5" }, { children: (0, jsx_runtime_1.jsx)(MultiRangeSliderInputs_1.MultiRangeSliderInputs, { inputType: "price", min: 0, max: 95000, step: 1, setFirstPage: setFirstPage }) })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Filters_module_scss_1.default.filterColor }, { children: (0, jsx_runtime_1.jsx)(Collapse_1.Collapse, Object.assign({ filterName: "\u0426\u0432\u0435\u0442", elementType: "h5" }, { children: (0, jsx_runtime_1.jsx)(FilterColor_1.FilterColor, { handleChange: handleChange, itemType: "color", paramArr: colorsArr }) })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Filters_module_scss_1.default.filterScreenSize }, { children: (0, jsx_runtime_1.jsx)(Collapse_1.Collapse, Object.assign({ filterName: "\u0414\u0438\u0430\u0433\u043E\u043D\u0430\u043B\u044C \u044D\u043A\u0440\u0430\u043D\u0430, \u0434\u044E\u0439\u043C", elementType: "h5" }, { children: (0, jsx_runtime_1.jsx)(MultiRangeSliderInputs_1.MultiRangeSliderInputs, { inputType: "screenSize", min: 4, max: 7, step: 0.1, setFirstPage: setFirstPage }) })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Filters_module_scss_1.default.filterMemory }, { children: (0, jsx_runtime_1.jsx)(Collapse_1.Collapse, Object.assign({ filterName: "\u041E\u0431\u044A\u0435\u043C \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u0439 \u043F\u0430\u043C\u044F\u0442\u0438, \u0413\u0431", elementType: "h5" }, { children: (0, jsx_runtime_1.jsx)(CheckboxList_1.CheckboxList, { handleChange: handleChange, itemType: "memory", paramArr: memoryArr }) })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Filters_module_scss_1.default.filterRam }, { children: (0, jsx_runtime_1.jsx)(Collapse_1.Collapse, Object.assign({ filterName: "\u041E\u0431\u044A\u0435\u043C \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439 \u043F\u0430\u043C\u044F\u0442\u0438, \u0413\u0431", elementType: "h5" }, { children: (0, jsx_runtime_1.jsx)(CheckboxList_1.CheckboxList, { handleChange: handleChange, itemType: "ram", paramArr: ramArr }) })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Filters_module_scss_1.default.filterNumberOfCores }, { children: (0, jsx_runtime_1.jsx)(Collapse_1.Collapse, Object.assign({ filterName: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u044F\u0434\u0435\u0440", elementType: "h5" }, { children: (0, jsx_runtime_1.jsx)(CheckboxList_1.CheckboxList, { handleChange: handleChange, itemType: "cpuCores", paramArr: cpuCoresArr }) })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Filters_module_scss_1.default.filterBatteryCapacity }, { children: (0, jsx_runtime_1.jsx)(Collapse_1.Collapse, Object.assign({ filterName: "\u0415\u043C\u043A\u043E\u0441\u0442\u044C \u0430\u043A\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430, \u043C\u0410\u0447", elementType: "h5" }, { children: (0, jsx_runtime_1.jsx)(MultiRangeSliderInputs_1.MultiRangeSliderInputs, { inputType: "batteryCapacity", min: 1500, max: 7000, step: 100, setFirstPage: setFirstPage }) })) }))] })));
};
exports.Filters = Filters;
//# sourceMappingURL=index.js.map