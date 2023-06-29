import * as types from "./actionTypes";

export function increaseCounter() {
  return { type: types.COUNTER_ADD };
}

export function decreaseCounter() {
  return { type: types.COUNTER_SUBTRACT };
}
