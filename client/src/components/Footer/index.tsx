import { FC } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';

export const Footer: FC = () => {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer className={classNames(styles.footerContainer, 'container', 'bgLightGray')}>
      <div 
        className={classNames(styles.footerRow, styles.footerLinks)} 
        style={{display: "none"}}
      >
        <div className={classNames(styles.forClients)}>
          <h6>Покупателям</h6>
          <ul>
            <li>
              <NavLink to="#">Способы оплаты</NavLink>
            </li>
            <li>
              <NavLink to="#">Доставка</NavLink>
            </li>
            <li>
              <NavLink to="#">Вопросы и ответы</NavLink>
            </li>
          </ul>
        </div>
        <div className={classNames(styles.aboutCompany)}>
          <h6>О компании</h6>
          <ul>
            <li>
              <NavLink to="#">О нас</NavLink>
            </li>
            <li>
              <NavLink to="#">Контакты</NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.followUs}>
          <h6>Мы в соцсетях</h6>
          <ul>
            <li>
              <NavLink to="#">Вконтакте</NavLink>
            </li>
            <li>
              <NavLink to="#">Одноклассники</NavLink>
            </li>
            <li>
              <NavLink to="#">Телеграм</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerRow}>
        <div>
          <span>{year} </span> 
          &copy; Online store
        </div>
      </div>
    </footer>
  );
};
