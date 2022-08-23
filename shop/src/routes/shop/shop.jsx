import { Route, Routes } from "react-router-dom";
import CategoryPage from "../categories-preview";
import Category from "../category";

import "./shop.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoryPage />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
