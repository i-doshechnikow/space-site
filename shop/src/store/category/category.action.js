import { CATEGORIES_ACTION_TYPE } from "./category.types";

import { actionCreator } from "../../utils/reducers/utils";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const fetchCategoriesStart = () =>
  actionCreator(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories) =>
  actionCreator(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailed = (error) =>
  actionCreator(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error);

export const fetchCategotiesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    let categoryMap = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categoryMap))
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
