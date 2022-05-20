import Pack from "../../components/Pack/Pack";
import styles from "./PacksGrid.module.scss";
const PacksGrid = ({ packs }) => {
  return (
    <div className={styles.container}>
      {packs.map((pack) => (
        <Pack key={pack.id} pack={pack} />
      ))}
    </div>
  );
};

export default PacksGrid;
