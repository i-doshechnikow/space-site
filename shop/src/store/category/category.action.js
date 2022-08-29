import { CATEGORIES_ACTION_TYPE } from "./category.types";

import { actionCreator } from "../../utils/reducers/utils";

export const setCategoriesMap = (categories) =>
  actionCreator(CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP, categories);
