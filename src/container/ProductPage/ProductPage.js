import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./ProductPage.module.scss";

const ProductPage = ({ packs }) => {
  const [packSpec, setPackSpec] = useState("");

  // grab the params from url and filter out all other packs
  const params = useParams();
  const pack = Object.assign(
    {},
    ...packs.filter((pack) => pack.id === params.id)
  );

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    setPackSpec({
      ...pack,
      colour: e.target[0].value,
    });
  };
  // render a select if there are multiple options or just the one
  function renderArrayOrSingle(packAttribute) {
    if (Array.isArray(packAttribute)) {
      return (
        <select>
          {packAttribute.map((col) => (
            <option key={col} value={col}>
              {col}
            </option>
          ))}{" "}
        </select>
      );
    } else {
      return packAttribute;
    }
  }

  return (
    <>
      <div className={styles.container}>
        <h2>
          {pack.brand} {pack.packName}
        </h2>

        <img src={pack.imgUrl} alt={pack.packName} className={styles.imgMain} />
        <form onSubmit={handleClick} className={styles.form}>
          <h3 className={styles.h3}>Features</h3>
          <ul className={styles.list}>
            <li>
              <span className={styles.secondary}>Colour:</span>{" "}
              {renderArrayOrSingle(pack.colour)}
            </li>
            <li>
              <span className={styles.secondary}>Size:</span> {pack.size}L
            </li>
            <li>
              <span className={styles.secondary}>Quanity Available:</span>{" "}
              {pack.quantity}
            </li>
            <li>
              <span className={styles.secondary}>Price:</span> {pack.price}{" "}
              {pack.priceCurrency}
            </li>
          </ul>
          <button className={styles.btn}>Add to Cart</button>
        </form>
        <div className={styles.description}>
          <h3 className={styles.h3}>More Details</h3>
          <p>{pack.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductPage;

//above code is wrong- needs to hold/ display detailed info about a single product.
