import styles from "./Main.module.css";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className={styles.container}>
      <Outlet />
    </main>
  );
};

export default Main;
