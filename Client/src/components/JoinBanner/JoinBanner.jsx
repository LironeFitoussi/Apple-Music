import styles from "./JoinBanner.module.css";

const JoinBanner = () => {
  return (
    <div className={styles.joinBanner}>
      <section>
        <h2>Get over 100 million songs free for 1 month.</h2>
        <p>Plus your entire music library on all your devices. 1 month free, then ‏10.99 ‏$/month.</p>
      </section>

      <button>Try it free</button>
    </div>
  );
};

export default JoinBanner;
