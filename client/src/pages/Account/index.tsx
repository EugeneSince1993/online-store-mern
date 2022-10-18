import { FC } from "react";
import { selectAuth, selectIsAuth } from "../../redux/auth/selectors";
import { useAppSelector } from "../../redux/hooks";
import styles from "./Account.module.scss";

export const Account: FC = () => {
  const { data } = useAppSelector(selectAuth);
  const isAuth = useAppSelector(selectIsAuth);

  return (
    <div className={styles.account}>
      <h3>Личный кабинет</h3>
      <div>
        {data && (
          <>
            <div className={styles.userName}>
              {data.fullName}
            </div>
            <div className={styles.userEmail}>
              {data.email}
            </div>
          </>
        )}
      </div>
    </div>
  );
};