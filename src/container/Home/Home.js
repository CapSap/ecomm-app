import Carosel from "../../components/Carosel/Carosel";
import PacksGrid from "../PacksGrid/PacksGrid";
import styles from "./Home.module.scss";

const Home = ({ packs }) => {
  console.log(packs);
  return (
    <div className={styles.home}>
      <Carosel packs={packs} />
      <PacksGrid packs={packs} />
    </div>
  );
};

export default Home;
