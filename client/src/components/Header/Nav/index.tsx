import { FC } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import styles from "./Nav.module.scss";

interface INavProps {
  cartTotal: number;
  favoritesTotal: number;
}

export const Nav: FC<INavProps> = ({ cartTotal, favoritesTotal }) => {
  return (
    <div className={styles.nav}>
      <nav>
        <ul>
          <li>
            <NavLink to="/cart">
              <div className={classNames(styles.linkInner, styles.cartLink)}>
                <div className={styles.linkGroup}>
                  <div className={styles.linkInnerText}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <div>Корзина</div>
                  </div>
                  {cartTotal > 0 && (
                    <div className={styles.totalCount}>
                      <div>{cartTotal}</div>
                    </div>
                  )}
                </div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites">
              <div className={classNames(styles.linkInner, styles.favoritesLink)}>
                <div className={styles.linkGroup}>
                  <div className={styles.linkInnerText}>
                    <i className="fa-solid fa-heart"></i>
                    <div>Избранное</div>
                  </div>
                  {favoritesTotal > 0 && (
                    <div className={styles.totalCount}>
                      <div>{favoritesTotal}</div>
                    </div>
                  )}
                </div>
              </div>
            </NavLink>
          </li>
          <li className={styles.login}>
            <a href="#">Войти</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
