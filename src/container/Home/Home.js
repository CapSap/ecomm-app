import { getALlpacks } from "../../services/db";
import styles from "./Home.module.scss";

const Home = () => {
  getALlpacks();
  return (
    <div className={styles.home}>
      <div className={styles.landing}>
        landing section/carosel of some featured products
      </div>

      <div>grid of products.</div>
    </div>
  );
};

export default Home;
