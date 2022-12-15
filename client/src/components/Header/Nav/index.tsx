import { FC, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./Nav.module.scss";
import { Popup } from "../../Popup";
import { Login } from "../../Forms";
import { Registration } from "../../Forms/Registration";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { selectIsAuth } from "../../../redux/auth/selectors";
import { logout } from "../../../redux/auth/authSlice";

interface INavProps {
  cartTotal: number;
  favoritesTotal: number;
}

export const Nav: FC<INavProps> = ({ cartTotal, favoritesTotal }) => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectIsAuth);
  const navigate = useNavigate();

  const [visibility, setVisibility] = useState<boolean>(false);
  const [loginActive, setLoginActive] = useState<boolean>(false);
  const [registerActive, setRegisterActive] = useState<boolean>(false);

  const popupCloseHandler = (isOpened: boolean) => {
    setVisibility(isOpened);
  };

  const loginHandler = () => {
    setVisibility(true);
    setLoginActive(true);
    setRegisterActive(false);
  };

  const registerHandler = () => {
    setVisibility(true);
    setRegisterActive(true);
    setLoginActive(false);
  };

  const onClickLogout = () => {
    if (window.confirm('Вы действительно хотите выйти?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
      navigate('/');
    }
  };

  return (
    <div className={styles.nav}>
      <nav>
        <ul>
          <li className={styles.cartListItem}>
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
          <li className={styles.favoritesListItem}>
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
          {isAuth ? (
            <>
              <li className={styles.accountListItem}>
                <NavLink to="/account">
                  <div className={classNames(styles.linkInner, styles.account)}>
                    <div className={styles.linkGroup}>
                      <div className={styles.linkInnerText}>
                        <i className="fa-solid fa-circle-user"></i>
                        <div>Личный кабинет</div>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </li>
              <li className={styles.logoutListItem}>
                <a onClick={onClickLogout}>
                  <div className={classNames(styles.linkInner, styles.logout)}>
                    <div className={styles.linkGroup}>
                      <div className={styles.linkInnerText}>
                        <i className="fa-solid fa-right-from-bracket"></i>
                        <div>Выйти</div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </>
          ) : (
            <>
              <li className={styles.loginListItem}>
                <a onClick={loginHandler}>
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
              <li className={styles.registrationListItem}>
                <a onClick={registerHandler}>
                  <div className={classNames(styles.linkInner, styles.register)}>
                    <div className={styles.linkGroup}>
                      <div className={styles.linkInnerText}>
                        <i className="fa-regular fa-address-card"></i>
                        <div>Регистрация</div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>            
            </>
          )}
        </ul>
      </nav>
      <Popup 
        onClose={popupCloseHandler}
        toShow={visibility}
        title={loginActive ? "Авторизация" : "Регистрация"}
      >
        {loginActive ? <Login onClose={popupCloseHandler} />
          : <Registration onClose={popupCloseHandler} />}
      </Popup>
    </div>
  );
};
