import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Carosel.module.scss";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Carosel = ({ packs }) => {
  const [current, setCurrent] = useState(0);

  const caroselPacks = packs.filter((pack) => pack.fav);
  // console.log(caroselPacks);

  const prevSlide = () => {
    console.log("prev click");
    setCurrent(current === 0 ? caroselPacks.length - 1 : current - 1);
  };
  const nextSlide = () => {
    console.log("next click");
    setCurrent(current === caroselPacks.length - 1 ? 0 : current + 1);
  };

  return (
    <div className={styles.container}>
      <FaArrowAltCircleLeft className={styles.leftArrow} onClick={prevSlide} />

      {caroselPacks.map((pack, index) => (
        <div
          className={index === current ? styles.card_active : styles.card}
          key={pack.id}
        >
          <img src={pack.imgUrl} alt={pack.packName} />
          <Link className={styles.btn} to={`/products/${pack.id}`}>
            Click to see more details{" "}
          </Link>
        </div>
      ))}
      <FaArrowAltCircleRight
        className={styles.rightArrow}
        onClick={nextSlide}
      />
    </div>
  );
};

export default Carosel;
