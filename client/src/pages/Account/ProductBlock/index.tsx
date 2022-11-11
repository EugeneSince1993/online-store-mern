import { FC } from "react";
import NumberFormat from "react-number-format";
import { NavLink } from "react-router-dom";
import classNames from 'classnames';
import styles from './ProductBlock.module.scss';
import { useAppDispatch } from "../../../redux/hooks";
import { deleteProductById } from "../../../redux/product/asyncActions";

interface Props {
  _id: string;
  imageUrl: string;
  images: string[];
  name: string;
  price: number;
  rating: number;
  testimonials: number;
  brand: string;
  memory: number;
  ram: number;
  cpuCores: number;
  screenSize: number;
  batteryCapacity: number;
  color: string;
  productCode: number;
  description: string;
  shortDesc: string;
  getProducts: () => void;
}

export const ProductBlock: FC<Props> = ({
  _id,
  name,
  price,
  imageUrl,
  productCode,
  rating,
  testimonials,
  getProducts,
  ...otherProps
}) => {
  const dispatch = useAppDispatch();

  const onClickRemove = async () => {
    if (window.confirm('Вы действительно хотите удалить товар?')) {
      const data = await dispatch(deleteProductById(_id));
      if (!data.payload) {
        alert('Не получилось удалить товар');
      } else {
        alert('Товар удален');
        getProducts();
      }
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
              <span className={styles.changeIcon}>
                <i className="fa-solid fa-gear"></i>
              </span>
              <span className={styles.toChange}>
                <NavLink to={`/update-product/${_id}`}>
                  Изменить
                </NavLink>
              </span>
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
