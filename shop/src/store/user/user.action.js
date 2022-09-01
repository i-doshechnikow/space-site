import { USER_ACTION_TYPES } from "./user.types";

import { actionCreator } from "../../utils/reducers/utils";

export const setCurrentUser = (user) =>
  actionCreator(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const checkUserSession = () =>
  actionCreator(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () =>
  actionCreator(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) =>
  actionCreator(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user) =>
  actionCreator(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) =>
  actionCreator(USER_ACTION_TYPES.SIGN_IN_FAILURE, error);
