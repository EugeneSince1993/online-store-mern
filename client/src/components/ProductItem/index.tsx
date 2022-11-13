import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import styles from './ProductItem.module.scss';
import { ICartItem } from '../../redux/cart/types';
import { useAppDispatch } from '../../redux/hooks';
import { addItem } from '../../redux/cart/cartSlice';
import { IFavoriteItem } from '../../redux/favorites/types';
import { addFavoriteItem } from '../../redux/favorites/favoriteSlice';
import { useSelector } from 'react-redux';
import { selectCartItemById } from '../../redux/cart/selectors';
import { selectFavoriteItemById } from '../../redux/favorites/selectors';
import { FC } from 'react';

interface Props {
  phoneImage: string;
  rating: number;
  testimonials: number;
  productName: string;
  priceValue: number;
  productId: string;
  productCode: number;
}

export const ProductItem: FC<Props> = ({ 
  phoneImage, 
  rating, 
  testimonials, 
  productName, 
  priceValue, 
  productId, 
  productCode
}) => {
  const dispatch = useAppDispatch();
  const cartItem = useSelector(selectCartItemById(productId));
  const favoriteItem = useSelector(selectFavoriteItemById(productId));

  const onClickAddToCart = () => {
    const item: ICartItem = {
      _id: productId,
      name: productName,
      price: priceValue,
      imageUrl: phoneImage,
      productCode: productCode,
      count: 0,
    };
    dispatch(addItem(item));
  };

  const onClickAddToFavorites = () => {
    const item: IFavoriteItem = {
      _id: productId,
      name: productName,
      price: priceValue,
      imageUrl: phoneImage,
      productCode,
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
            {favoriteItem ? (
              <div className={styles.favoritesInner}>
                <i className={classNames("fa-solid fa-heart", styles.added)}></i>
                <div className={classNames("tooltipText", styles.tooltipText)}>
                  Добавлено в избранное
                </div>
              </div>
            ) : (
              <div className={styles.favoritesInner}>
                <i className={classNames("fa-solid fa-heart", styles.add)}></i>
                <div className={classNames("tooltipText", styles.tooltipText)}>
                  Добавить в избранное
                </div>
              </div>
            )}
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
                {cartItem ? (
                  <div className={styles.iconContainer}>
                    <i className="fa-solid fa-check"></i>
                    <div className="tooltipText">Добавлено в корзину</div>                  
                  </div>
                ) : (
                  <div className={styles.iconContainer}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <div className="tooltipText">Добавить в корзину</div>                  
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
