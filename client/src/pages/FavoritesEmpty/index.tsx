import { FC, useEffect } from 'react';
import styles from './FavoritesEmpty.module.scss';
import { Button } from '../../components';
import favoritesEmpty from '../../assets/img/favorites.png';

export const FavoritesEmpty: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.favoritesEmpty}>
      <h1>Избранное</h1>
      <div className={styles.favoritesContainer}>
        <div className={styles.info}>
          <h3>В Избранном нет товаров</h3>
          <img src={favoritesEmpty} />
          <p>
            Зайдите в каталог и добавьте товары в Избранное
          </p>
          <Button display="block" variant="solid" link="/" justifyContentCenter>
            В каталог
          </Button>
        </div>
      </div>
    </div>
  );
};
