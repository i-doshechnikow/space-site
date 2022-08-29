import { USER_ACTION_TYPES } from "./user.types";

import { actionCreator } from "../../utils/reducers/utils";

export const setCurrentUser = (user) =>
  actionCreator(USER_ACTION_TYPES.SET_CURRENT_USER, user);
