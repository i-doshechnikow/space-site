import ProductCard from "../product-card/productCard";
import "./category-preview.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {products.flatMap((product, index) => {
          return index < 4
            ? [<ProductCard key={product.id} {...product} />]
            : [];
        })}
      </div>
    </div>
  );
};

export default CategoryPreview;
