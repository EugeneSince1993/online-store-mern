"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filters = void 0;
const Filters_module_scss_1 = __importDefault(require("./Filters.module.scss"));
const Collapse_1 = require("../Collapse");
const MultiRangeSliderInputs_1 = require("./MultiRangeSliderInputs");
const CheckboxList_1 = require("./CheckboxList");
const FilterColor_1 = require("./FilterColor");
const Filters = ({ handleChange, setFirstPage, brandsArr, memoryArr, ramArr, cpuCoresArr, colorsArr }) => {
    return (<div className={Filters_module_scss_1.default.filtersContainer}>
      <div className={Filters_module_scss_1.default.filterBrand}>
        <Collapse_1.Collapse filterName="Бренд" elementType="h5">
          <CheckboxList_1.CheckboxList handleChange={handleChange} itemType="brand" paramArr={brandsArr}/>
        </Collapse_1.Collapse>
      </div>
      <div className={Filters_module_scss_1.default.filterPrice}>
        <Collapse_1.Collapse filterName="Цена, ₽" elementType="h5">
          <MultiRangeSliderInputs_1.MultiRangeSliderInputs inputType="price" min={0} max={95000} step={1} setFirstPage={setFirstPage}/>
        </Collapse_1.Collapse>
      </div>
      <div className={Filters_module_scss_1.default.filterColor}>
        <Collapse_1.Collapse filterName="Цвет" elementType="h5">
          <FilterColor_1.FilterColor handleChange={handleChange} itemType="color" paramArr={colorsArr}/>
        </Collapse_1.Collapse>
      </div>
      <div className={Filters_module_scss_1.default.filterScreenSize}>
        <Collapse_1.Collapse filterName="Диагональ экрана, дюйм" elementType="h5">
          <MultiRangeSliderInputs_1.MultiRangeSliderInputs inputType="screenSize" min={4} max={7} step={0.1} setFirstPage={setFirstPage}/>
        </Collapse_1.Collapse>
      </div>
      <div className={Filters_module_scss_1.default.filterMemory}>
        <Collapse_1.Collapse filterName="Объем встроенной памяти, Гб" elementType="h5">
          <CheckboxList_1.CheckboxList handleChange={handleChange} itemType="memory" paramArr={memoryArr}/>
        </Collapse_1.Collapse>
      </div>
      <div className={Filters_module_scss_1.default.filterRam}>
        <Collapse_1.Collapse filterName="Объем оперативной памяти, Гб" elementType="h5">
          <CheckboxList_1.CheckboxList handleChange={handleChange} itemType="ram" paramArr={ramArr}/>
        </Collapse_1.Collapse>
      </div>
      <div className={Filters_module_scss_1.default.filterNumberOfCores}>
        <Collapse_1.Collapse filterName="Количество ядер" elementType="h5">
          <CheckboxList_1.CheckboxList handleChange={handleChange} itemType="cpuCores" paramArr={cpuCoresArr}/>
        </Collapse_1.Collapse>
      </div>
      <div className={Filters_module_scss_1.default.filterBatteryCapacity}>
        <Collapse_1.Collapse filterName="Емкость аккумулятора, мАч" elementType="h5">
          <MultiRangeSliderInputs_1.MultiRangeSliderInputs inputType="batteryCapacity" min={1500} max={7000} step={100} setFirstPage={setFirstPage}/>
        </Collapse_1.Collapse>
      </div>
    </div>);
};
exports.Filters = Filters;
//# sourceMappingURL=index.js.map