import styles from "./Carosel.module.scss";

const Carosel = ({ packs }) => {
  return (
    <div className={styles.container}>{packs.map((pack) => pack.name)}</div>
  );
};

export default Carosel;
