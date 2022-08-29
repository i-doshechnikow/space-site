import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { setCategoriesMap } from "../../store/category/category.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import CategoryPage from "../categories-preview";
import Category from "../category";

import "./shop.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesFromFirestore = async () => {
      let categoryMap = await getCategoriesAndDocuments();

      dispatch(setCategoriesMap(categoryMap));
    };

    getCategoriesFromFirestore();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoryPage />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
