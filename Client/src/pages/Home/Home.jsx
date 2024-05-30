import styles from "./Home.module.css";

import Discover from "../../components/Discover/Discover";

const Home = () => {
  return (
    <div className={styles.container}>
      <Discover />
    </div>
  );
};

export default Home;
