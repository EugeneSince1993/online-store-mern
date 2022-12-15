import { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import { setSort } from '../../redux/filter/filterSlice';
import { SortPropertyEnum } from '../../redux/filter/types';
import { useAppDispatch } from '../../redux/hooks';
import styles from './Sorting.module.scss';

type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export const sortList: SortItem[] = [
  { name: 'по популярности (по убыванию)', sortProperty: SortPropertyEnum.RATING_DESC },
  { name: 'по популярности (по возрастанию)', sortProperty: SortPropertyEnum.RATING_ASC },
  { name: 'по цене (по убыванию)', sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: 'по цене (по возрастанию)', sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: 'по алфавиту (по убыванию)', sortProperty: SortPropertyEnum.TITLE_DESC },
  { name: 'по алфавиту (по возрастанию)', sortProperty: SortPropertyEnum.TITLE_ASC },
];

export const Sorting: FC = () => {
  const dispatch = useAppDispatch();

  let [priceVisited, setPriceVisited] = useState(false);
  let [titleVisited, setTitleVisited] = useState(false);

  let [isRatingActive, setIsRatingActive] = useState(false);
  const handleRatingClick = () => {
    onClickListItem(sortList[0]);
    if (isRatingActive) {
      return null;
    } else {
      setIsRatingActive(true);
    }
  };

  let [isPriceActive, setIsPriceActive] = useState(false);
  let [isPriceAscending, setIsPriceAscending] = useState(false);
  const handlePriceClick = () => {
    setPriceVisited(true);
    setIsPriceAscending(current => !current);
    if (isPriceActive) {
      return null;
    } else {
      setIsPriceActive(true);
    }
  };

  let [isTitleActive, setIsTitleActive] = useState(false);
  let [isTitleAscending, setIsTitleAscending] = useState(false);
  const handleTitleClick = () => {
    setTitleVisited(true);
    setIsTitleAscending(current => !current);
    if (isTitleActive) {
      return null;
    } else {
      setIsTitleActive(true);
    }
  };

  useEffect(() => {
    if (isRatingActive) {
      setIsPriceActive(false);
      setIsTitleActive(false);
    }
  }, [isRatingActive]);

  useEffect(() => {
    if (isPriceActive) {
      setIsRatingActive(false);
      setIsTitleActive(false);
    } else {
      setPriceVisited(false);
    }
  }, [isPriceActive]);

  useEffect(() => {
    if (isTitleActive) {
      setIsRatingActive(false);
      setIsPriceActive(false);
    } else {
      setTitleVisited(false);
    }
  }, [isTitleActive]);

  useEffect(() => {
    if (isPriceAscending) {
      onClickListItem(sortList[3]);
    } else {
      onClickListItem(sortList[2]);
    }
  }, [isPriceAscending]);

  useEffect(() => {
    if (isTitleAscending) {
      onClickListItem(sortList[5]);
    } else {
      onClickListItem(sortList[4]);
    }
  }, [isTitleAscending]);

  const onClickListItem = (obj: SortItem) => {
    dispatch(setSort(obj));
  };

  useEffect(() => {
    onClickListItem(sortList[0]);
    setIsRatingActive(true);
  }, []);

  return (
    <div className={styles.sorting}>
      <div 
        className={classNames(styles.rating, {[styles.selected]: isRatingActive})}
        onClick={handleRatingClick}
      >
        по популярности
      </div>
      <div 
        className={classNames(styles.price, {[styles.selected]: isPriceActive})}
        onClick={handlePriceClick}
      >
        <span>по цене</span>
        {!priceVisited ? ''
          : isPriceAscending ? (
            <i className="fa-solid fa-arrow-up-short-wide"></i>
          ) : (
            <i className="fa-solid fa-arrow-down-short-wide"></i>
          )
        }
      </div>
      <div 
        className={classNames(styles.title, {[styles.selected]: isTitleActive})}
        onClick={handleTitleClick}
      >
        <span>по алфавиту</span>
        {!titleVisited ? ''
          : isTitleAscending ? (
            <i className="fa-solid fa-arrow-up-short-wide"></i>
          ) : (
            <i className="fa-solid fa-arrow-down-short-wide"></i>
          )
        }
      </div>
    </div>
  );
};
