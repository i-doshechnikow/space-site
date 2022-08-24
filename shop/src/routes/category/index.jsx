import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/productCard";
import { CategoriesContext } from "../../context/shop";

import "./category.scss";

const Category = () => {
  const { category } = useParams();

  const { categories } = useContext(CategoriesContext);

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
