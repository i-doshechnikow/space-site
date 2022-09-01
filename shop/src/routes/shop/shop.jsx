import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { fetchCategoriesStart } from "./../../store/category/category.action";
import CategoryPage from "../categories-preview";
import Category from "../category";

import "./shop.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoryPage />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
