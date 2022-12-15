import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { setCurrentPage, setSearchValue } from '../../../redux/filter/filterSlice';
import styles from './Search.module.scss';

export const Search: FC = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<string>('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.toLocaleLowerCase());
  };

  const updateSearchValue = (val: string) => {
    dispatch(setSearchValue(val));
    dispatch(setCurrentPage(1));
  };

  const handleOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      updateSearchValue(value);
    }
  };

  useEffect(() => {
    if (value === '') {
      updateSearchValue('');
    }
  }, [value]);

  return (
    <div className={styles.search}>
      <div className={styles.searchContainer}>
        <div className={styles.searchInput}>
          <input 
            type="text" 
            value={value}
            onChange={onInputChange}
            onKeyDown={handleOnEnter}
            placeholder="Я ищу..." 
          />
        </div>
        <div 
          className={styles.searchIcon}
          onClick={() => updateSearchValue(value)}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  );
};
