import { FC, useEffect, useMemo } from "react";
import { Pagination, Sorting } from "../../components";
import { selectAuth, selectIsAuth } from "../../redux/auth/selectors";
import { setCurrentPage } from "../../redux/filter/filterSlice";
import { selectFilter } from "../../redux/filter/selectors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchProducts } from "../../redux/product/asyncActions";
import { selectProduct } from "../../redux/product/selectors";
import { IProduct } from "../../types/IProduct";
import styles from "./Account.module.scss";
import spinner from '../../assets/img/Spinner-1s-200px.gif';
import { ProductBlock } from "./ProductBlock";
import { NavLink } from "react-router-dom";

let pageSize = 8;

export const Account: FC = () => {
  const { data } = useAppSelector(selectAuth);
  const isAuth = useAppSelector(selectIsAuth);

  const dispatch = useAppDispatch();
  const { products, isLoading } = useAppSelector(selectProduct);
  const { sort, currentPage } = useAppSelector(selectFilter);

  let finalProducts: IProduct[] = products;

  const setFirstPage = () => {
    dispatch(setCurrentPage(1));
  };

  const getProducts = () => {
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'desc' : 'asc';

    dispatch(fetchProducts({sortBy, order}));
    setFirstPage();
  };

  useEffect(() => {
    getProducts();
  }, [sort.sortProperty]);

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return finalProducts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, finalProducts]);

  return (
    <div className={styles.account}>
      <h3>Личный кабинет</h3>
      <div className={styles.content}>
        <div className={styles.productData}>
          <h4>Редактирование товаров</h4>
          <div className={styles.addProduct}>
            <NavLink to="/create-product">
              <div>
                <span className={styles.icon}>
                  <i className="fa-solid fa-plus"></i>
                </span>
                <span className={styles.text}>Добавить товар</span>
              </div>
            </NavLink>
          </div>
          <div className={styles.sorting}>
            <Sorting />
          </div>
          <div className={styles.productListContainer}>
            {isLoading ? (
              <div className={styles.loadingBlock}>
                <img src={spinner} />
              </div>
            ) : (currentData.length && (
                <>
                  <div className={styles.productListWrapper}>
                    <div className={styles.productList}>
                      {currentData.map((item: IProduct, index: number) => (
                        <ProductBlock key={index} {...item} />
                      ))}
                    </div>
                  </div>
                  <div className={styles.productsPagination}>
                    <Pagination 
                      className={styles.paginationBar}
                      currentPage={currentPage}
                      totalCount={finalProducts.length}
                      pageSize={pageSize}
                      onPageChange={(page: number) => dispatch(setCurrentPage(page))}
                    />
                  </div>
                </>
            ))}
          </div>
        </div>
        <div className={styles.userData}>
          <h4>Данные пользователя</h4>
          {data && (
            <>
              <div className={styles.userName}>
                {data.fullName}
              </div>
              <div className={styles.userEmail}>
                {data.email}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};