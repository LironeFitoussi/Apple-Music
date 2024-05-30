import styles from "./PlayerVolume.module.css";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { playerActions } from "../../store/player-slice";

// SVG Components
import SVGComponent from "../SVG/volume-svg.jsx";
import UserSVG from "../SVG/user-svg.jsx";

const PlayerVolume = () => {
  const dispatch = useDispatch();
  const volume = useSelector((state) => state.player.volume);
  const sliderRef = useRef(null);

  const handleVolumeChange = (event) => {
    dispatch(playerActions.setVolume(Number(event.target.value)));
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.setProperty("--slider-value", `${volume}%`);
    }
  }, [volume]);

  return (
    <div className={styles.container}>
      <div className={styles.playerVolume}>
        <SVGComponent />
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
      <div className={styles.infoContainer}>
        <img src="./images/list.svg" alt="" />
        <div className={styles.signIn}>
          <UserSVG />
          <span>Sign in</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerVolume;
