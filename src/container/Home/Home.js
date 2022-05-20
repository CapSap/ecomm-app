import Carosel from "../../components/Carosel/Carosel";
import PacksGrid from "../PacksGrid/PacksGrid";
import styles from "./Home.module.scss";

const Home = ({ packs }) => {
  console.log(packs);
  return (
    <div className={styles.home}>
      <div className={styles.landing}>
        <h1 className={styles.landing_heading}>Pack Shop Online</h1>
      </div>
      <Carosel packs={packs} />
      <PacksGrid packs={packs} />
    </div>
  );
};

export default Home;
