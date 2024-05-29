import styles from "./Header.module.css";

import PlayerButtons from "../PlayerButtons/PlayerButtons";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
const Header = () => {
  return (
    <header className={styles.header}>
      <PlayerButtons />
      <MusicPlayer />
    </header>
  );
};

export default Header;
