import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/productCard";
import { selectCategoriesMap } from "../../store/category/category.select";

import "./category.scss";

const Category = () => {
  const { category } = useParams();

  const categories = useSelector(selectCategoriesMap);

  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <>
      <h2 className="title">{category.toUpperCase()}</h2>
      <div className="directory-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </div>
    </>
  );
};

export default Category;
