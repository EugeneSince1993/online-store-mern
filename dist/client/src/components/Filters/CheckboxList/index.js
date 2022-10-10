"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxList = void 0;
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
        return (<label key={index} className={CheckboxList_module_scss_1.default.container}>
        {item}
        <input type="checkbox" id={itemTypeNumber} name={item} value={item} checked={itemValue} onChange={(e) => handleChange(e, actionCreator, itemObj)}/>
        <span className={CheckboxList_module_scss_1.default.checkmark}></span>
      </label>);
    });
    return (<div className={CheckboxList_module_scss_1.default.checkboxList}>
      {itemList}
    </div>);
});
//# sourceMappingURL=index.js.map