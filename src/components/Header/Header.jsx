import styles from "./Header.module.css";

import PlayerButtons from "../PlayerButtons/PlayerButtons";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import PlayerVolume from "../PlayerVolume/PlayerVolume";

const Header = () => {
  return (
    <header className={styles.header}>
      <PlayerButtons />
      <MusicPlayer />
      <PlayerVolume />
    </header>
  );
};

export default Header;
