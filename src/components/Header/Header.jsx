import styles from "./Header.module.css";

import PlayerButtons from "../PlayerButtons/PlayerButtons";

const Header = () => {
  return (
    <header className={styles.header}>
        <PlayerButtons />
    </header>
  );
};

export default Header;
