import styles from "./TopShelf.module.css";

import { useRef, useState } from "react";
import VerBoxPlaylist from "../VerBoxPlaylist/VerBoxPlaylist";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

const TopShelf = () => {
  const [hover, setHover] = useState(false);
  const containerRef = useRef(null);
  const handleNextClick = () => {
    containerRef.current.scrollBy({
      left: (81 * window.innerWidth) / 100,
      behavior: "smooth",
    });
  };

  const handlePrevClick = () => {
    containerRef.current.scrollBy({
      left: (-81 * window.innerWidth) / 100,
      behavior: "smooth",
    });
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <div
      className={styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`${styles.prevButton} ${!hover ? styles.hidden : ""}`}
        onClick={handlePrevClick}
      >
        <img src="./images/paddle-left.svg" alt="" />
      </button>
      <div className={styles.carousel} ref={containerRef}>
        <div className={styles.slideContianer}>
          <div className={styles.topShelf}>
            <VerBoxPlaylist
              playlist={{
                collection: "UPDATED PLAYLIST",
                title: "Today’s Hits",
                subtitle: "Apple Music Hits",
                description:
                  "Shaboozey finds temporary euphoria in “A Bar Song (Tipsy).” Hear how in Spatial Audio.",
                cover:
                  "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/ec/cf/d7/eccfd76f-d043-0ba7-a181-cb1f468ef1a9/6ac45cc9-6322-4ccc-b9b0-03e732ef83a5.png/530x304sr.webp",
              }}
            />

            <VerBoxPlaylist
              playlist={{
                collection: "UPDATED PLAYLIST",
                title: "Today’s Hits",
                subtitle: "Apple Music Hits",
                description:
                  "Shaboozey finds temporary euphoria in “A Bar Song (Tipsy).” Hear how in Spatial Audio.",
                cover:
                  "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/15/de/54/15de544f-aab2-e59c-6289-ff783c3e0b16/da736ff3-75b2-4e04-91bb-ab1d6e971f66.png/530x304sr.webp",
              }}
            />

            <VerBoxPlaylist
              playlist={{
                collection: "UPDATED PLAYLIST",
                title: "Today’s Hits",
                subtitle: "Apple Music Hits",
                cover:
                  "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/8d/e0/53/8de0534f-bfb2-7bc2-39db-a63da333d06b/source/530x304sr.webp",
              }}
            />
          </div>
          <div className={styles.topShelf}>
            <VerBoxPlaylist
              playlist={{
                collection: "UPDATED PLAYLIST",
                title: "Today’s Hits",
                subtitle: "Apple Music Hits",
                description:
                  "Shaboozey finds temporary euphoria in “A Bar Song (Tipsy).” Hear how in Spatial Audio.",
                cover:
                  "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/db/96/df/db96df00-9384-a5d7-fc48-3f1e98d91a89/source/530x304sr.webp",
              }}
            />

            <VerBoxPlaylist
              playlist={{
                collection: "UPDATED PLAYLIST",
                title: "Today’s Hits",
                subtitle: "Apple Music Hits",
                description:
                  "Shaboozey finds temporary euphoria in “A Bar Song (Tipsy).” Hear how in Spatial Audio.",
                cover:
                  "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/73/52/cf/7352cfba-4a2e-b59c-465d-2570ab70e719/source/530x304sr.webp",
              }}
            />

            <VerBoxPlaylist
              playlist={{
                collection: "UPDATED PLAYLIST",
                title: "Today’s Hits",
                subtitle: "Apple Music Hits",
                cover:
                  "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/6b/f7/05/6bf705c1-6187-ba8a-2157-ddd101c9874e/61aa5ab7-bcda-4e65-b503-eb6c28e884cd.png/530x304sr.webp",
              }}
            />
          </div>
          <div className={styles.topShelf}>
            <VerBoxPlaylist
              playlist={{
                collection: "UPDATED PLAYLIST",
                title: "Today’s Hits",
                subtitle: "Apple Music Hits",
                description:
                  "Shaboozey finds temporary euphoria in “A Bar Song (Tipsy).” Hear how in Spatial Audio.",
                cover:
                  "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/33/00/f2/3300f27d-93f1-1b3b-58f4-249044189ca7/ffd2cc11-1499-40b2-ac8f-1de2a3b924de.png/480x275sr.webp",
              }}
            />

            <VerBoxPlaylist
              playlist={{
                collection: "UPDATED PLAYLIST",
                title: "Today’s Hits",
                subtitle: "Apple Music Hits",
                description:
                  "Shaboozey finds temporary euphoria in “A Bar Song (Tipsy).” Hear how in Spatial Audio.",
                cover:
                  "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/3a/26/ed/3a26edd1-fe99-e7e7-3f61-86659ca6baae/0b2a3d7f-f1a3-4f50-95c5-9d488aaded53.png/480x275sr.webp",
              }}
            />

            <VerBoxPlaylist
              playlist={{
                collection: "UPDATED PLAYLIST",
                title: "Today’s Hits",
                subtitle: "Apple Music Hits",
                cover:
                  "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/0c/35/39/0c3539c1-c09a-f194-512a-88d1437aa2d6/source/480x275sr.webp",
              }}
            />
          </div>
        </div>
      </div>
      <button
        className={`${styles.nextButton} ${!hover ? styles.hidden : ""}`}
        onClick={handleNextClick}
      >
        <img src="./images/paddle-left.svg" alt="" />
      </button>
    </div>
  );
};

export default TopShelf;
