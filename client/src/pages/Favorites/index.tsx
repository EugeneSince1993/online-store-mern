import { FC, useEffect } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { useSelector } from 'react-redux';
import { Button, FavoriteItem } from '../../components';
import { FavoritesEmpty } from '../FavoritesEmpty';
import { selectFavorites } from '../../redux/favorites/selectors';
import { clearFavoriteItems } from '../../redux/favorites/favoriteSlice';
import styles from './Favorites.module.scss';
import { IFavoriteItem } from '../../redux/favorites/types';
import classNames from 'classnames';

export const Favorites: FC = () => {
  const dispatch = useAppDispatch();
  const { items } = useSelector(selectFavorites);

  const onClickClear = () => {
    if (window.confirm('Очистить избранное?')) {
      dispatch(clearFavoriteItems());
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!items.length) {
    return <FavoritesEmpty />;
  }
  
  return (
    <div className={classNames(styles.favoritesBlock, "favorites-block")}>
      <h1>Избранное</h1>
      <div className={classNames(styles.favoritesContainer, "favorites-container")}>
        <div className={styles.productList}>
          {items.map((item: IFavoriteItem) => (
            <FavoriteItem key={item._id} {...item} />
          ))}
        </div>
        <div className={classNames(styles.summary, "summary")}>
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
