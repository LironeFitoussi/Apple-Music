import styles from "./MusicPlayer.module.css";
import { useSelector } from "react-redux";
const MusicPlayer = () => {
  const { currentTrack } = useSelector((state) => state.player);

  return (
    <div className={styles.musicPlayer}>
      <audio>
        <source
          src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"
          type="audio/mpeg"
        />
      </audio>
      <div className={styles.imageContainer}>
        <img src={currentTrack.cover} alt="" />
      </div>
      <div className={styles.trackContainer}>
        {currentTrack.url === null ? (
            <img src='./images/apple-logo.svg' alt="" />
        ) : (
          <p>
          </p>
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;
