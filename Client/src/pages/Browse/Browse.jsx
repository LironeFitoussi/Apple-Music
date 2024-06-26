import styles from "./Browse.module.css";

import TopShelf from "../../components/TopShelf/TopShelf";
import BestAlbumsShelf from "../../components/BestAlbumsShelf/BestAlbumsShelf";
import TrendingSongs from "../../components/TrendingSongs/TrendingSongs";
const Browse = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <h1>Browse</h1>
        <svg
          className={styles.thinLine}
          width="100%"
          height="1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0" y1="0" x2="100%" y2="0" stroke="grey" strokeWidth="1" />
        </svg>
      </div>
      <TopShelf />
      <BestAlbumsShelf />
      <TrendingSongs />
    </div>
  );
};

export default Browse;
