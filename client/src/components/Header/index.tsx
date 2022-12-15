import { FC, useEffect, useRef } from 'react';
import MediaQuery from 'react-responsive';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';
import { Search } from './Search';
import { selectCart } from '../../redux/cart/selectors';
import { selectFavorites } from '../../redux/favorites/selectors';
import { Nav } from './Nav';
import styles from './Header.module.scss';
import onlineStoreLogo from '../../assets/img/online-store-logo-min.png';

export const Header: FC = () => {
  const { items: cartItems } = useSelector(selectCart);
  const { items: favoriteItems } = useSelector(selectFavorites);
  const location = useLocation();
  const isMounted = useRef(false);

  const cartTotal = cartItems.reduce((sum: number, item: any) => sum + item.count, 0);
  const favoritesTotal = favoriteItems.reduce((sum: number, item: any) => sum + item.count, 0);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(cartItems);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [cartItems]);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(favoriteItems);
      localStorage.setItem('favorites', json);
    }
    isMounted.current = true;
  }, [favoriteItems]);

  return (
    <>
      <header className={classNames(styles.header, 'bgLightGray')}>
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <NavLink to="/">
              <img src={onlineStoreLogo} alt="online store" />
            </NavLink>
          </div>
          {location.pathname === '/' && <Search />}
          <MediaQuery minWidth={1024}>
            <Nav cartTotal={cartTotal} favoritesTotal={favoritesTotal} />
          </MediaQuery>
        </div>
      </header>
      <MediaQuery maxWidth={1023}>
        <Nav cartTotal={cartTotal} favoritesTotal={favoritesTotal} />
      </MediaQuery>
    </>
  );
};
