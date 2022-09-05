import { createSelector } from "reselect";
import { CategoriesState } from "./category.reducer";
import { CategoryMap } from "./category.types";

// @ts-ignore
const selectCategoryReducer = (state): CategoriesState => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice): CategoryMap => categoriesSlice.categoriesMap
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap => categories
);

export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  ({ isLoading }): boolean => isLoading
);
