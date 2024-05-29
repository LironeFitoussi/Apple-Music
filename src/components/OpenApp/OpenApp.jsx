import styles from "./OpenApp.module.css";

import { Link } from "react-router-dom";
const OpenApp = () => {
  return (
    <Link className={styles.container} to='#'>
      <img src="./images/apple-music.svg" alt="" />
      <span>Open in Music</span>
      <img style={{
        width: "10px",
      }} src="./images/arrow.svg" alt="" />
    </Link>
  );
};

export default OpenApp;
