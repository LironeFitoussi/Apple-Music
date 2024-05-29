import styles from "./Aside.module.css";

// Import Components
import AppleMusicLogo from "../../components/SVG/apple-music-logo";
import SearchBar from "../../components/SearchBar/SearchBar";
import OpenApp from "../../components/OpenApp/OpenApp";

import { Link, useLocation } from "react-router-dom";

const Aside = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <aside className={styles.aside}>
      <div>
        <div className={styles.asideContent}>
          <AppleMusicLogo />
          <SearchBar />
          <nav>
          <ul className={styles.menuList}>
            <li className={pathname === "/home" ? styles.active : ""}>
              <Link to="/home">
                <img src="./images/home.svg" alt="" />
                Home
              </Link>
            </li>
            <li className={pathname === "/browse" ? styles.active : ""}>
              <Link to="/browse">
                <img src="./images/browse.svg" alt="" />
                Browse
              </Link>
            </li>
            <li className={pathname === "/radio" ? styles.active : ""}>
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
        <OpenApp />
      </div>
    </aside>
  );
};

export default Aside;
