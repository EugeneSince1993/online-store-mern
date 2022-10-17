import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import styles from "./Nav.module.scss";
import { Popup } from "../../Popup";
import { Login } from "../../Forms";

interface INavProps {
  cartTotal: number;
  favoritesTotal: number;
}

export const Nav: FC<INavProps> = ({ cartTotal, favoritesTotal }) => {
  const [visibility, setVisibility] = useState<boolean>(false);

  const popupCloseHandler = (isOpened: boolean) => {
    setVisibility(isOpened);
  };

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
          {/* <li>
            <a onClick={() => setVisibility(true)}>
              <div className={classNames(styles.linkInner, styles.login)}>
                <div className={styles.linkGroup}>
                  <div className={styles.linkInnerText}>
                    <i className="fa-solid fa-arrow-right-to-bracket"></i>
                    <div>Войти</div>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a onClick={() => setVisibility(true)}>
              <div className={classNames(styles.linkInner, styles.register)}>
                <div className={styles.linkGroup}>
                  <div className={styles.linkInnerText}>
                    <i className="fa-regular fa-address-card"></i>
                    <div>Регистрация</div>
                  </div>
                </div>
              </div>
            </a>
          </li> */}
        </ul>
      </nav>
      {/* <Popup 
        onClose={popupCloseHandler}
        toShow={visibility}
        title="Popup Title"
      >
        <div>
          <Login />
        </div>
      </Popup> */}
    </div>
  );
};
