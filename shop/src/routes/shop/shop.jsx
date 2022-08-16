import { useContext } from "react";
import ProductCard from "../../components/product-card/productCard";
import { ProductContext } from "../../context/shop";

import "./shop.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </div>
  );
};

export default Shop;
