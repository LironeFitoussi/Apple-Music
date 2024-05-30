import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <img src="./images/search.svg" alt="" />
      <input
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
