import PacksGrid from "../PacksGrid/PacksGrid.jsx";
import styles from "./Home.module.scss";
import Carosel from "../../components/Carosel/Carosel.jsx";

const Home = ({ packs }) => {
  return (
    <div className={styles.home}>
      <div className={styles.landing}>
        <h1 className={styles.landing_heading}>Pack Shop Online</h1>
      </div>
      <h2 className={styles.heading}>Featured Products</h2>
      <Carosel packs={packs} />
      <PacksGrid packs={packs} />
    </div>
  );
};

export default Home;
