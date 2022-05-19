import { useState, useEffect } from "react";
import Pack from "../../components/Pack/Pack";

const ProductPage = ({ packs }) => {
  console.log(packs);

  return packs
    ? packs.map((pack) => <Pack pack={pack} key={pack.id} />)
    : "awaiting packs";
};

export default ProductPage;

//above code is wrong-
