import styles from "./TopShelf.module.css";

import VerBoxPlaylist from "../VerBoxPlaylist/VerBoxPlaylist";

const TopShelf = () => {
  return (
    <div className={styles.carousel}>
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
    </div>
  );
};

export default TopShelf;
