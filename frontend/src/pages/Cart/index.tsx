import { FC, useEffect } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/cart/selectors';
import NumberFormat from 'react-number-format';
import classNames from 'classnames';
import { clearItems } from '../../redux/cart/cartSlice';
import { CartItem, Button } from '../../components';
import styles from './Cart.module.scss';
import { CartEmpty } from '../CartEmpty';
import { ICartItem } from '../../redux/cart/types';

export const Cart: FC = () => {
  const dispatch = useAppDispatch();
  const { totalPrice, items } = useSelector(selectCart);

  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onClickClear = () => {
    if (window.confirm('Очистить корзину?')) {
      dispatch(clearItems());
    }
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }
  
  return (
    <div className={styles.cartBlock}>
      <h1>Корзина</h1>
      <div className={styles.cartContainer}>
        <div className={styles.productList}>
          {items.map((item: ICartItem) => (
            <CartItem key={item._id} {...item} />
          ))}
        </div>
        <div className={styles.summary}>
          <div className={styles.summaryContainer}>
            <h3>Итого</h3>
            <div className={styles.summaryBlocks}>
              <div className={styles.productQuantity}>
                <div className={styles.quantityKey}>Количество товаров</div>
                <div className={styles.quantityValue}>{totalCount}</div>
              </div>
              <div className={styles.total}>
                <div className={styles.totalKey}>Сумма</div>
                <div className={classNames(styles.price, styles.totalValue)}>
                  <div className={styles.priceValue}>
                    <NumberFormat 
                      value={totalPrice} 
                      displayType='text' 
                      thousandSeparator=' '
                    />
                  </div>
                  <div className={styles.currency}>₽</div>
                </div>        
              </div>
            </div>
          </div>
          <Button display="block" variant="solid">
            Оформить заказ
          </Button>
          <Button 
            display="block" 
            variant="outlined"
            onClickFunc={onClickClear}
          >
            Очистить корзину
          </Button>
        </div>
      </div>
    </div>
  );
};
