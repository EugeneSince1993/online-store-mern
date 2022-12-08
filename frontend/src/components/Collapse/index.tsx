import * as React from 'react';
import styles from "./Collapse.module.scss";
import classNames from 'classnames';

interface ICollapseProps {
  collapsed?: boolean;
  children: React.ReactNode;
  filterName: string;
  elementType?: keyof JSX.IntrinsicElements;
}

export const Collapse: React.FC<ICollapseProps> = ({ 
  collapsed, children, filterName, elementType: ElementType = 'h5'
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);

  return (
    <>
      <div
        className={styles.collapseDiv}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <ElementType>{filterName}</ElementType>
        {
          isCollapsed ? (
            <i className="fa-solid fa-chevron-down"></i>
          ) : (
            <i className="fa-solid fa-chevron-up"></i>
          )
        }
      </div>
      <div
        className={classNames(
          styles.collapseContent, 
          { 
            [styles.collapsed]: isCollapsed,
            [styles.expanded]: !isCollapsed
          })}
        aria-expanded={isCollapsed}
      >
        {children}
      </div>
    </>
  );
};