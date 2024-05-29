import styles from "./PlayerVolume.module.css";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { playerActions } from "../../store/player-slice";

const PlayerVolume = () => {
  const dispatch = useDispatch();
  const volume = useSelector((state) => state.player.volume);
  const sliderRef = useRef(null);

  const handleVolumeChange = (event) => {
    dispatch(playerActions.setVolume(Number(event.target.value)));
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.setProperty('--slider-value', `${volume}%`);
    }
  }, [volume]);

  return (
    <div className={styles.playerVolume}>
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        className={styles.volumeSlider}
        onChange={handleVolumeChange}
        ref={sliderRef}
      />
    </div>
  );
};

export default PlayerVolume;
