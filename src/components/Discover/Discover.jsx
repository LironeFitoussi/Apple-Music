import styles from "./Discover.module.css";

// SVG Import
import ArrowRightSVG from "../SVG/ArrowRightSVG";

const Discover = () => {
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
    }}>
      <div className={styles.container}>
        <img src="./images/apple-music-txt.svg" alt="apple music logo" />
        <h1>Discover new music every day.</h1>
        <p>
          Get playlists and albums inspired by the artists and genres you’re
          listening to. 1 month free, then
        </p>
        <p>10.99 $/month.</p>
        <button>Try it free</button>
        <a>
          <span>Learn more{' '}</span>
          <ArrowRightSVG />
        </a>
      </div>
      <img style={{
          width: "100%"
      }} src="./images/mac image.webp" alt="" />
    </div>
  );
};

export default Discover;
