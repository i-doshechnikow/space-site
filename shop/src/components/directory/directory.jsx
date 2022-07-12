import React from "react";

import CategoryItem from "../category-item/category-item";

import "./directory.styles.scss";

export default ({ categories }) => (
  <div className="categories-container">
    {categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}
  </div>
);
