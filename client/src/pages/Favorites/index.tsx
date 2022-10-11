import { FC } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { useSelector } from 'react-redux';
import { Button, FavoriteItem } from '../../components';
import { FavoritesEmpty } from '../FavoritesEmpty';
import { selectFavorites } from '../../redux/favorites/selectors';
import { clearFavoriteItems } from '../../redux/favorites/favoriteSlice';
import styles from './Favorites.module.scss';

export const Favorites: FC = () => {
  const dispatch = useAppDispatch();
  const { items } = useSelector(selectFavorites);

  const onClickClear = () => {
    if (window.confirm('Очистить избранное?')) {
      dispatch(clearFavoriteItems());
    }
  };

  if (!items.length) {
    return <FavoritesEmpty />;
  }
  
  return (
    <div className={styles.favoritesBlock}>
      <h1>Избранное</h1>
      <div className={styles.favoritesContainer}>
        <div className={styles.productList}>
          {items.map((item: any) => (
            <FavoriteItem key={item.id} {...item} />
          ))}
        </div>
        <div className={styles.summary}>
          <Button 
            display="block" 
            variant="outlined"
            onClickFunc={onClickClear}
          >
            Очистить избранное
          </Button>
        </div>
      </div>
    </div>
  );
};
