import styles from "./VerBoxPlaylist.module.css";

const VerBoxPlaylist = ({ playlist }) => {
  const { collection, title, subtitle, description, cover } = playlist;

  return (
    <div className={styles.verBoxPlaylist}>
      <div className={styles.header}>
        <span>{collection}</span>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <div className={styles.imgContainer}>
        <img src={cover} alt={title} />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VerBoxPlaylist;
