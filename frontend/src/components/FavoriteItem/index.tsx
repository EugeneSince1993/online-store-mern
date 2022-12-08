import { FC } from "react";
import NumberFormat from "react-number-format";
import { useAppDispatch } from "../../redux/hooks";
import { NavLink } from "react-router-dom";
import classNames from 'classnames';
import styles from './FavoriteItem.module.scss';
import { removeFavoriteItem } from "../../redux/favorites/favoriteSlice";
import { ICartItem } from "../../redux/cart/types";
import { addItem } from "../../redux/cart/cartSlice";
import { IFavoriteItem } from "../../redux/favorites/types";
import { useSelector } from "react-redux";
import { selectCartItemById } from "../../redux/cart/selectors";

export const FavoriteItem: FC<IFavoriteItem> = ({
  _id,
  name,
  price,
  imageUrl,
  productCode
}) => {
  const dispatch = useAppDispatch();
  const cartItem = useSelector(selectCartItemById(_id));

  const onClickRemove = () => {
    if (window.confirm('Вы действительно хотите удалить товар?')) {
      dispatch(removeFavoriteItem(_id));
    }
  };

  const onClickAddToCart = () => {
    const item: ICartItem = {
      _id,
      name,
      price,
      imageUrl,
      productCode,
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className={styles.productItem}>
      <NavLink to={`/products/${_id}`} className={styles.thumbnail}>
        <img src={imageUrl} />
      </NavLink>
      <div className={styles.dataContainer}>
        <div className={styles.productInfo}>
          <NavLink to={`/products/${_id}`} className={styles.productName}>
            {name}
          </NavLink>
        </div>
        <div className={styles.price}>
          <div className={styles.priceValue}>
            <NumberFormat 
              value={price} 
              displayType='text' 
              thousandSeparator=' '
            />
          </div>
          <div className={styles.currency}>₽</div>
        </div>
        <div className={styles.addToCart}>
          <button onClick={onClickAddToCart}>
            {cartItem ? (
              <div className={styles.toCartInner}>
                <span className={styles.cartIcon}>
                  <i className="fa-solid fa-check"></i>
                </span>
                <span className={styles.toCart}>В корзине</span>
              </div>
            ) : (
              <div className={styles.toCartInner}>
                <span className={styles.cartIcon}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
                <span className={styles.toCart}>В корзину</span>
              </div>                    
            )}
          </button>
        </div>
        <div className={classNames(styles.deleteProduct, "tooltip", styles.tooltip)}>
          <div onClick={onClickRemove}>
            <i className="fa-solid fa-trash"></i>
            <div className={classNames("tooltipText", styles.tooltipText)}>
              Удалить
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
