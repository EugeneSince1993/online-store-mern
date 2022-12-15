import React, { memo } from 'react';
import styles from './FilterColor.module.scss';

interface IProps {
  itemType: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    actionCreator: Function,
    entity: any
    ) => any;
  paramArr: any[];
}

export const FilterColor = memo(({
  itemType, handleChange, paramArr
}: IProps) => {
  const actionCreator = paramArr[0];
  const itemObj = paramArr[1];

  const itemArr = Object.keys(itemObj).map((key) => [key, itemObj[key]]);

  let itemList = itemArr.map((unitArr: any, index: number) => {
    let item = unitArr[0];
    let itemValue = unitArr[1]; 

    let itemNumber = index + 1;
    let itemTypeNumber = itemType + itemNumber;

    return (
      <label 
        key={index}
        className={styles.formControl} 
      >
        <input 
          type="checkbox" 
          id={itemTypeNumber} 
          name={item} 
          value={item}
          className={`fc-${item}`}
          checked={itemValue}
          onChange={(e) => handleChange(e, actionCreator, itemObj)} 
        />
        <span className={styles.checkmark}></span>
      </label>
    );
  });

  return (
    <div className={styles.filterColorList}>
      {itemList}
    </div>
  );
});
