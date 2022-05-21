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
        <div>
          <img src={pack.imgUrl} alt={pack.packName} />
          <form onSubmit={handleClick}>
            <ul>
              <li>
                Price: {pack.price} {pack.priceCurrency}
              </li>

              <li>Colour: {renderArrayOrSingle(pack.colour)}</li>
              <li>Size: {pack.size}</li>
            </ul>
            <button>Add to Cart</button>
          </form>
          <p>{pack.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductPage;

//above code is wrong- needs to hold/ display detailed info about a single product.
