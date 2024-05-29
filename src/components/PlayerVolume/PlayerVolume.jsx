import styles from "./PlayerVolume.module.css";
import { useSelector, useDispatch } from "react-redux";
import { playerActions } from "../../store/player-slice";

const PlayerVolume = () => {
  const dispatch = useDispatch();
  const volume = useSelector((state) => state.player.volume); // Update selector
  const handleVolumeChange = (event) => {
    dispatch(playerActions.setVolume(Number(event.target.value)));
  };

  return (
    <div className={styles.playerVolume}>
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        className={styles.volumeSlider}
        onChange={handleVolumeChange}
      />
    </div>
  );
};

export default PlayerVolume;
