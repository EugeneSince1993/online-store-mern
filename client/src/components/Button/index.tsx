import { FC, ReactNode } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./Button.module.scss";

interface IButtonProps {
  display: string;
  variant: string;
  link?: string;
  justifyContentCenter?: boolean;
  onClickFunc?: () => any;
  children: ReactNode;
}

export const Button: FC<IButtonProps> = ({
  display = "inline-block",
  variant,
  link = "/",
  justifyContentCenter = false,
  onClickFunc,
  children,
}) => {
  return (
    <>
      {display === "block" && (
        <div
          className={classNames({
            [styles.buttonContainer]: true,
            [styles.justifyContentCenter]: justifyContentCenter,
          })}
        >
          <NavLink
            to={link}
            className={classNames({
              [styles.button]: true,
              [styles.outlined]: variant === "outlined",
              [styles.solid]: variant === "solid",
              [styles.db]: true,
            })}
            onClick={onClickFunc}
          >
            {children}
          </NavLink>
        </div>
      )}
      {display === "inline-block" && (
        <NavLink
          to={link}
          className={classNames({
            [styles.button]: true,
            [styles.outlined]: variant === "outlined",
            [styles.solid]: variant === "solid",
            [styles.dib]: true,
          })}
          onClick={onClickFunc}
        >
          {children}
        </NavLink>
      )}
    </>
  );
};
