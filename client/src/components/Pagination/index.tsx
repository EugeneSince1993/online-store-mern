import { FC } from 'react';
import classNames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import styles from "./Pagination.module.scss";

interface IPaginationProps {
  onPageChange: Function;
  totalCount: any;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className: any;
}

export const Pagination: FC<IPaginationProps> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  })!;

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul
      className={classNames(styles.paginationContainer, { [className]: className })}
    >
      <li
        className={classNames(styles.paginationItem, { 
          [styles.disabled]: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <div className={classNames(styles.arrow, styles.left)}></div>
      </li>
      {paginationRange.map((pageNumber: any, index: number) => {
        if (pageNumber === DOTS) {
          return (
            <li 
              key={index} 
              className={classNames(styles.paginationItem, styles.dots)}
            >
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={index}
            className={classNames(styles.paginationItem, {
              [styles.selected]: pageNumber == currentPage
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classNames(styles.paginationItem, {
          [styles.disabled]: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <div className={classNames(styles.arrow, styles.right)}></div>
      </li>
    </ul>
  );
};
