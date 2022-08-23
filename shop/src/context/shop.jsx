import { createContext, useEffect, useState } from "react";

// import SHOP_DATA from "../shop-data.js";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const getCategoriesFromFirestore = async () => {
      let categoryMap = await getCategoriesAndDocuments();

      setCategories(categoryMap);
    };

    getCategoriesFromFirestore();
  }, []);

  //NOTE: set new values to database, if it needs
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  const value = { categories };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
