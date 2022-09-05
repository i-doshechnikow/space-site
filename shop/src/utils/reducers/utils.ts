import { AnyAction } from "redux";

export type ActionWithPayload<T, P> = {
  type: T;
  payload?: P;
};

export type Action<T> = {
  type: T;
};

export function actionCreator<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function actionCreator<T extends string>(
  type: T,
  payload: void
): Action<T>;

export function actionCreator<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
