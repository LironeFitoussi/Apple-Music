import styles from "./MiniVerBox.module.css";

const MiniVerBox = ({ playlist }) => {
  const { link, cover } = playlist;

  return (
    <div className={styles.container}>
        <img src={cover}/>
        <a href={link}>Go to the site ↗</a>
    </div>
  );
};

export default MiniVerBox;
