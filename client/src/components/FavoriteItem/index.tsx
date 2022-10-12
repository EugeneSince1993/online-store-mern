import { FC } from "react";
import NumberFormat from "react-number-format";
import { useAppDispatch } from "../../redux/hooks";
import { NavLink } from "react-router-dom";
import classNames from 'classnames';
import styles from './FavoriteItem.module.scss';
import { removeFavoriteItem } from "../../redux/favorites/favoriteSlice";
import { CartItem } from "../../redux/cart/types";
import { addItem } from "../../redux/cart/cartSlice";

interface IFavoriteItemProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  productCode: number;
};

export const FavoriteItem: FC<IFavoriteItemProps> = ({
  id,
  name,
  price,
  imageUrl,
  productCode
}) => {
  const dispatch = useAppDispatch();

  const onClickRemove = () => {
    if (window.confirm('Вы действительно хотите удалить товар?')) {
      dispatch(removeFavoriteItem(id));
    }
  };

  const onClickAddToCart = () => {
    const item: CartItem = {
      id: id,
      name: name,
      price: price,
      imageUrl: imageUrl,
      productCode: productCode,
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className={styles.productItem}>
      <NavLink to={`/products/${id}`} className={styles.thumbnail}>
        <img src={imageUrl} />
      </NavLink>
      <div className={styles.dataContainer}>
        <div className={styles.productInfo}>
          <NavLink to={`/products/${id}`} className={styles.productName}>
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
            <div>
              <span className={styles.cartIcon}>
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
              <span className={styles.toCart}>В корзину</span>
            </div>
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
