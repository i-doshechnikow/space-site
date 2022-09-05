import { CATEGORIES_ACTION_TYPE, Category } from "./category.types";

import {
  actionCreator,
  Action,
  ActionWithPayload,
} from "../../utils/reducers/utils";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategoriesError = ActionWithPayload<
  CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED,
  Error
>;

export type CategoryAction =
  | FetchCategoriesStart
  | FetchCategoriesSuccess
  | FetchCategoriesError;

export const fetchCategoriesStart = (): FetchCategoriesStart =>
  actionCreator(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (
  categories: Category[]
): FetchCategoriesSuccess =>
  actionCreator(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailed = (error: Error): FetchCategoriesError =>
  actionCreator(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error);

// @ts-ignore
export const fetchCategotiesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    let categoryMap = await getCategoriesAndDocuments();
    // @ts-ignore
    dispatch(fetchCategoriesSuccess(categoryMap));
  } catch (error) {
    // @ts-ignore
    dispatch(fetchCategoriesFailed(error));
  }
};
