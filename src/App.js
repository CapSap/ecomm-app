import { useState, useEffect } from "react";
import Home from "./container/Home/Home";
import NavBar from "./container/NavBar/Nav";
import ProductPage from "./container/ProductPage/ProductPage";
import { getALlpacks } from "./services/db";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [packs, setPacks] = useState([]);

  useEffect(() => {
    (async () => {
      setPacks(await getALlpacks());
    })();
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/products" element={<ProductPage packs={packs} />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
