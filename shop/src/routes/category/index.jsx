import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/productCard";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/category/category.select";
import Spinner from "./../../components/spinner/spinner.component";

import "./category.scss";

const Category = () => {
  const { category } = useParams();

  const categories = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <>
      <h2 className="title">{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="directory-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
        </div>
      )}
    </>
  );
};

export default Category;
