"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CheckboxList_module_scss_1 = __importDefault(require("./CheckboxList.module.scss"));
exports.CheckboxList = (0, react_1.memo)(({ itemType, handleChange, paramArr }) => {
    const actionCreator = paramArr[0];
    const itemObj = paramArr[1];
    const itemArr = Object.keys(itemObj).map((key) => [key, itemObj[key]]);
    let itemList = itemArr.map((unitArr, index) => {
        let item = unitArr[0];
        let itemValue = unitArr[1];
        let itemNumber = index + 1;
        let itemTypeNumber = itemType + itemNumber;
        return ((0, jsx_runtime_1.jsxs)("label", Object.assign({ className: CheckboxList_module_scss_1.default.container }, { children: [item, (0, jsx_runtime_1.jsx)("input", { type: "checkbox", id: itemTypeNumber, name: item, value: item, checked: itemValue, onChange: (e) => handleChange(e, actionCreator, itemObj) }), (0, jsx_runtime_1.jsx)("span", { className: CheckboxList_module_scss_1.default.checkmark })] }), index));
    });
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: CheckboxList_module_scss_1.default.checkboxList }, { children: itemList })));
});
//# sourceMappingURL=index.js.map