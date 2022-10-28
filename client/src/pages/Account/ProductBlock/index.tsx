import { FC } from "react";
import NumberFormat from "react-number-format";
import { NavLink } from "react-router-dom";
import classNames from 'classnames';
import { removeItem } from "../../../redux/cart/cartSlice";
import styles from './ProductBlock.module.scss';
import { useAppDispatch } from "../../../redux/hooks";
import { IProduct } from "../../../types/IProduct";

export const ProductBlock: FC<IProduct> = ({
  _id,
  name,
  price,
  imageUrl,
  productCode,
  rating,
  testimonials,
  ...productBlockProps
}) => {
  const dispatch = useAppDispatch();

  const onClickRemove = () => {
    if (window.confirm('Вы действительно хотите удалить товар?')) {
      dispatch(removeItem(_id));
    }
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
          <div className={styles.productCode}>
            Код товара: {productCode}
          </div>
          <div className={styles.icons}>
            <div className={classNames(styles.rating, "tooltip", styles.tooltip)}>
              <i className="fa-solid fa-star"></i>
              <span>{rating}</span>
            </div>
            <div className={classNames(styles.testimonials, "tooltip", styles.tooltip)}>
              <i className="fa-solid fa-comment"></i>
              <span>{testimonials}</span>
            </div>
          </div>
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
        <div className={styles.changeProduct}>
          <button>
            <div>
              <span className={styles.cartIcon}>
                <i className="fa-solid fa-gear"></i>
              </span>
              <span className={styles.toCart}>Изменить</span>
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
