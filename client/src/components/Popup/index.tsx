import { FC, ReactNode, useEffect, useRef, useState } from "react";
import styles from "./Popup.module.scss";

interface IPopupProps {
  toShow: boolean;
  title: string;
  onClose: (e: any) => any;
  children: ReactNode;
}

export const Popup: FC<IPopupProps> = ({ 
  toShow, 
  title, 
  onClose, 
  children 
}) => {
  const [show, setShow] = useState<boolean>(false); 
  const myRef: any = useRef();

  const closeHandler = () => {
    setShow(false);
    onClose(false);
  };

  useEffect(() => {
    setShow(toShow);
  }, [toShow]);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (show && myRef.current && !myRef.current.contains(e.target)) {
        closeHandler();
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [show]);

  return (
    <div 
      className={styles.overlay}
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0"
      }}
    >
      <div 
        className={styles.popup}
        ref={myRef}
      >
        <h3>{title}</h3>
        <div className={styles.close} onClick={closeHandler}>
          &times;
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};