import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function counterReducer(state = initialState.counter, action) {
  switch (action.type) {
    case types.COUNTER_ADD:
      return state + 1;
    case types.COUNTER_SUBTRACT:
      return state - 1;
    default:
      return state;
  }
}
