import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import styles from './ProductItem.module.scss';
import { CartItem } from '../../redux/cart/types';
import { useAppDispatch } from '../../redux/hooks';
import { addItem } from '../../redux/cart/cartSlice';
import { FavoriteItem } from '../../redux/favorites/types';
import { addFavoriteItem } from '../../redux/favorites/favoriteSlice';

interface Props {
  phoneImage: string;
  rating: number;
  testimonials: number;
  productName: string;
  priceValue: number;
  productId: number;
  productCode: number;
}

export const ProductItem = ({ 
  phoneImage, 
  rating, 
  testimonials, 
  productName, 
  priceValue, 
  productId, 
  productCode
}: Props) => {
  const dispatch = useAppDispatch();

  const onClickAddToCart = () => {
    const item: CartItem = {
      id: productId.toString(),
      name: productName,
      price: priceValue,
      imageUrl: phoneImage,
      productCode: productCode,
      count: 0,
    };
    dispatch(addItem(item));
  };

  const onClickAddToFavorites = () => {
    const item: FavoriteItem = {
      id: productId.toString(),
      name: productName,
      price: priceValue,
      imageUrl: phoneImage,
      count: 0,
    };
    dispatch(addFavoriteItem(item));
  };

  return (
    <div className={styles.productItem}>
      <div className={styles.productItemInner}>
        <NavLink to={`/products/${productId}`} className={styles.image}>
          <img src={phoneImage} />
        </NavLink>
        <div className={styles.icons}>
          <div className={classNames(styles.rating, "tooltip", styles.tooltip)}>
            <i className="fa-solid fa-star"></i>
            <span>{rating}</span>
            <div className={classNames("tooltipText", styles.tooltipText)}>
              Рейтинг {rating} из 5
            </div>
          </div>
          <div className={classNames(styles.testimonials, "tooltip", styles.tooltip)}>
            <i className="fa-solid fa-comment"></i>
            <span>{testimonials}</span>
            <div className={classNames("tooltipText", styles.tooltipText)}>
              {testimonials} отзывов
            </div>
          </div>
          <div 
            className={classNames(styles.favorites, "tooltip", styles.tooltip)}
            onClick={onClickAddToFavorites}
          >
            <i className="fa-solid fa-heart"></i>
            <div className={classNames("tooltipText", styles.tooltipText)}>
              Добавить в избранное
            </div>
          </div>
        </div>
        <NavLink to={`/products/${productId}`} className={styles.productLink}>
          {productName}
        </NavLink>
        <div className={styles.buyContainer}>
          <div className={styles.buy}>
            <NavLink to={`/products/${productId}`} className={styles.price}>
              <div className={styles.priceValue}>
                <NumberFormat 
                  value={priceValue} 
                  displayType='text' 
                  thousandSeparator=' '
                />
              </div>
              <div className={styles.currency}>₽</div>
            </NavLink>
            <div className={styles.addToCart}>
              <button 
                className="tooltip"
                onClick={onClickAddToCart}
              >
                <i className="fa-solid fa-cart-shopping"></i>
                <div className="tooltipText">Добавить в корзину</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
