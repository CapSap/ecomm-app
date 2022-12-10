import { Link } from "react-router-dom";
import styles from "./PacksGrid.module.scss";

const Pack = ({ pack }) => {
  return (
    <Link to={`/products/${pack.id}`} className={styles.link}>
      <div className={styles.pack}>
        <img src={pack.imgUrl} alt={pack.name} />
        <p>
          {" "}
          {pack.brand} {pack.packName}
        </p>
        <p className={styles.secondary}>Size: {pack.size}</p>
        <p className={styles.secondary}>
          Price: {pack.price} {pack.priceCurrency}
        </p>
      </div>
    </Link>
  );
};

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
