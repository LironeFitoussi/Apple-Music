import styles from "./VerBoxPlaylist.module.css";

const VerBoxPlaylist = ({ playlist }) => {
  const { collection, title, subtitle, description, cover } = playlist;
  return (
    <div className={styles.verBoxPlaylist}>
      <span>{collection}</span>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <img src={cover} alt={title} />
      <p>{description}</p>
    </div>
  );
};

export default VerBoxPlaylist;
