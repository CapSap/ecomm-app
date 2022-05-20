import styles from "./PacksGrid.module.scss";

const Pack = ({ pack }) => {
  return (
    <div className={styles.pack}>
      <img src={pack.imgUrl} alt={pack.name} />
      <p>Brand: {pack.brand}</p>
      <p>Name: {pack.packName}</p>
      <p>
        Price: {pack.price}
        {pack.priceCurrency}
      </p>
      <p>Size: {pack.size}</p>
    </div>
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
