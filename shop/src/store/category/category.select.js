import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categoriesMap
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories
);

export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  ({ isLoading }) => isLoading
);
