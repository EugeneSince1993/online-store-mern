import { FC } from 'react';
import styles from './CartEmpty.module.scss';
import { Button } from '../../components';
import cartEmpty from '../../assets/img/cart-empty.png';

export const CartEmpty: FC = () => {
  return (
    <div className={styles.cartEmpty}>
      <h1>Корзина</h1>
      <div className={styles.cartContainer}>
        <div className={styles.info}>
          <h3>Корзина пуста</h3>
          <img src={cartEmpty} />
          <p>
            Зайдите в каталог и выберите товары
          </p>
          <Button display="block" variant="solid" link="/" justifyContentCenter>
            В каталог
          </Button>
        </div>
      </div>
    </div>
  );
};
