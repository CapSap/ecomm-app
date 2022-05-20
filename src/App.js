import { useState, useEffect } from "react";
import Home from "./container/Home/Home";
import ProductPage from "./container/ProductPage/ProductPage";
import { getALlpacks } from "./services/db";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./container/Admin/Admin";
import NavBar from "./container/NavBar/Nav";

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
        <Route path="/" element={<Home packs={packs} />} />
        <Route path="/products/:id" element={<ProductPage packs={packs} />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
