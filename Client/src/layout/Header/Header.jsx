import styles from "./Header.module.css";

import PlayerButtons from "../../components/PlayerButtons/PlayerButtons";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import PlayerVolume from "../../components/PlayerVolume/PlayerVolume";

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
