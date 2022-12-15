import styles from './SearchInput.module.scss';

export const SearchInput = () => {

  return (
    <div className={styles.inputSearch}>
      <input type="text" placeholder="Я ищу..." />
    </div>
  );
};
