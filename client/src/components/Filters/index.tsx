import { FC } from 'react';
import styles from './Filters.module.scss';
import { Collapse } from '../Collapse';
import { MultiRangeSliderInputs } from './MultiRangeSliderInputs';
import { CheckboxList } from './CheckboxList';
import { FilterColor } from './FilterColor';
import { IRangeExtremes } from '../../redux/filter/types';

type FilterProps = {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    actionCreator: Function,
    entityName: any
    ) => any;
  setFirstPage: () => any;
  brandsArr: any[];
  memoryArr: any[];
  ramArr: any[];
  cpuCoresArr: any[];
  colorsArr: any[];
  rangeExtremes: IRangeExtremes;
};

export const Filters: FC<FilterProps> = ({
  handleChange, 
  setFirstPage,
  brandsArr, 
  memoryArr,
  ramArr,
  cpuCoresArr,
  colorsArr,
  rangeExtremes
}) => {

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filterBrand}>
        <Collapse filterName="Бренд" elementType="h5">
          <CheckboxList 
            handleChange={handleChange}
            itemType="brand"
            paramArr={brandsArr}
          />
        </Collapse>
      </div>
      <div className={styles.filterPrice}>
        <Collapse filterName="Цена, ₽" elementType="h5">
          <MultiRangeSliderInputs 
            inputType="price" 
            min={rangeExtremes.priceExtremes.minPrice} 
            max={rangeExtremes.priceExtremes.maxPrice} 
            step={1} 
            setFirstPage={setFirstPage}
          />
        </Collapse>
      </div>
      <div className={styles.filterColor}>
        <Collapse filterName="Цвет" elementType="h5">
          <FilterColor 
            handleChange={handleChange}
            itemType="color"
            paramArr={colorsArr}
          />
        </Collapse>
      </div>
      <div className={styles.filterScreenSize}>
        <Collapse filterName="Диагональ экрана, дюйм" elementType="h5">
          <MultiRangeSliderInputs 
            inputType="screenSize" 
            min={rangeExtremes.screenSizeExtremes.minScreenSize} 
            max={rangeExtremes.screenSizeExtremes.maxScreenSize} 
            step={0.1} 
            setFirstPage={setFirstPage}
          />
        </Collapse>
      </div>
      <div className={styles.filterMemory}>
        <Collapse filterName="Объем встроенной памяти, Гб" elementType="h5">
          <CheckboxList 
            handleChange={handleChange}
            itemType="memory"
            paramArr={memoryArr}
          />
        </Collapse>
      </div>
      <div className={styles.filterRam}>
        <Collapse filterName="Объем оперативной памяти, Гб" elementType="h5">
          <CheckboxList 
            handleChange={handleChange}
            itemType="ram"
            paramArr={ramArr}
          />
        </Collapse>
      </div>
      <div className={styles.filterNumberOfCores}>
        <Collapse filterName="Количество ядер" elementType="h5">
          <CheckboxList 
            handleChange={handleChange}
            itemType="cpuCores"
            paramArr={cpuCoresArr}
          />
        </Collapse>
      </div>
      <div className={styles.filterBatteryCapacity}>
        <Collapse filterName="Емкость аккумулятора, мАч" elementType="h5">
          <MultiRangeSliderInputs 
            inputType="batteryCapacity" 
            min={rangeExtremes.batteryCapacityExtremes.minBatteryCapacity} 
            max={rangeExtremes.batteryCapacityExtremes.maxBatteryCapacity}
            step={100}
            setFirstPage={setFirstPage}
          />
        </Collapse>
      </div>
    </div>
  );
}; 
