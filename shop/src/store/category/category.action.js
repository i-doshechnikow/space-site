import { CATEGORIES_ACTION_TYPE } from "./category.types";

import { actionCreator } from "../../utils/reducers/utils";

export const fetchCategoriesStart = () =>
  actionCreator(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories) =>
  actionCreator(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailed = (error) =>
  actionCreator(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error);
