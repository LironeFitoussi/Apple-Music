import styles from "./BestAlbumsShelf.module.css";
import MiniVerBox from "../MiniVerBox/MiniVerBox";

const BestAlbumsShelf = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>100 Best Albums</h3>
      </div>
      <div className={styles.albumsContainer}>
        <MiniVerBox
          playlist={{
            cover: "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/4a/dc/c1/4adcc126-160a-e836-a871-8f8b3f408b36/source/340x191mv.webp",
            link: "",
          }}
        />
        <MiniVerBox
          playlist={{
            cover: "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/e6/74/cf/e674cf28-942f-596c-5740-88b41c18f456/source/340x191mv.webp",
            link: "",
          }}
        />
        <MiniVerBox
          playlist={{
            cover: "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/cf/ab/14/cfab14d8-0db7-c0d0-749f-fd0dcf762742/source/340x191mv.webp",
            link: "",
          }}
        />
        <MiniVerBox
          playlist={{
            cover: "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/11/89/64/118964a9-bfac-1c39-e157-cc4e083a9de8/source/340x191mv.webp",
            link: "",
          }}
        />
      </div>
    </div>
  );
};

export default BestAlbumsShelf;
