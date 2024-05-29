import styles from "./Aside.module.css";
import AppleMusicLogo from "../../components/SVG/apple-music-logo";
import SearchBar from "../../components/SearchBar/SearchBar";

import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <div>
        <AppleMusicLogo />
        <div className={styles.asideContent}>
          <SearchBar />
          <nav>
            <ul className={styles.menuList}>
              <li>
                <Link to="/">
                  <img src="./images/home.svg" alt="" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/browse">
                  <img src="./images/browse.svg" alt="" />
                  Browse
                </Link>
              </li>
              <li>
                <Link to="/radio">
                  <img src="./images/radio.svg" alt="" />
                  Radio
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div>
        
      </div>
    </aside>
  );
};

export default Aside;
