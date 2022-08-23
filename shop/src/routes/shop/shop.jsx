import { Fragment, useContext } from "react";
import ProductCard from "../../components/product-card/productCard";
import { CategoriesContext } from "../../context/shop";

import "./shop.scss";

const Shop = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categories).map((title) => {
        return (
          <Fragment key={title}>
            <h2>{title}</h2>
            <div className="products-container">
              {categories[title].map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default Shop;
