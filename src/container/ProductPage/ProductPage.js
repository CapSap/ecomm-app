import { Link, useParams } from "react-router-dom";
import styles from "./ProductPage.module.scss";

const ProductPage = ({ packs }) => {
  const params = useParams();
  console.log(params.id);

  console.log(packs);

  const pack = Object.assign(
    {},
    ...packs.filter((pack) => pack.id === params.id)
  );

  console.log(pack);

  return (
    <>
      <div className={styles.container}>
        <h2>
          {pack.brand} {pack.packName}
        </h2>
        <div>
          <img src={pack.imgUrl} alt={pack.packName} />
          <p>{pack.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductPage;

//above code is wrong- needs to hold/ display detailed info about a single product.
