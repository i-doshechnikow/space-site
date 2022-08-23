import { Route, Routes } from "react-router-dom";
import CategoryPage from "../categories-preview";

import "./shop.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoryPage />} />
    </Routes>
  );
};

export default Shop;
