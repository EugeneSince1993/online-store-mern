import { FC, ReactNode } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

interface IButtonProps {
  display?: string;
  variant?: string;
  link?: string;
  justifyContentCenter?: boolean;
  onClickFunc?: (param: any) => any | void;
  faClass?: string;
  children: ReactNode;
}

export const ButtonWithIcon: FC<IButtonProps> = ({
  display = "inline-block",
  variant = "solid",
  link = "",
  justifyContentCenter = false,
  onClickFunc,
  faClass = "fa-solid fa-gear",
  children
}) => {
  return (
    <>
      {display === "block" && (
        <div 
          className={classNames("button-container", {
            "button-container_jcc": justifyContentCenter,
          })}
        >
          <NavLink
            to={link}
            className={classNames("button", "button_db", {
              "button_outlined": variant === "outlined",
              "button_solid": variant === "solid",
            })}
            onClick={onClickFunc}
          >
            <div 
              className={classNames("button__icon", {
                "button__icon_solid": variant === "solid",
              })}
            >
              <i className={faClass}></i>
            </div>
            <div 
              className={classNames("button__text", {
                "button__text_solid": variant === "solid",
              })}
            >
              {children}
            </div>
          </NavLink>
        </div>
      )}
      {display === "inline-block" && (
        <NavLink
          to={link}
          className={classNames("button", "button_dib", {
            "button_outlined": variant === "outlined",
            "button_solid": variant === "solid",
          })}
          onClick={onClickFunc}
        >
          <div 
            className={classNames("button__icon", {
              "button__icon_solid": variant === "solid",
            })}
          >
            <i className={faClass}></i>
          </div>
          <div 
            className={classNames("button__text", {
              "button__text_solid": variant === "solid",
            })}
          >
            {children}
          </div>
        </NavLink>
      )}
    </>
  );
};
