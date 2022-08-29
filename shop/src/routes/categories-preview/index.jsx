import { Fragment } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview";
import { selectCategoriesMap } from "../../store/category/category.select";

const CategoryPage = () => {
  const categories = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      {Object.keys(categories).map((title) => {
        const products = categories[title];

        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoryPage;
