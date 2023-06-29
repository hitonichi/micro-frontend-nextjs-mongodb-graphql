import { combineReducers } from "redux";
import notes from "./noteReducer";
import counter from "./counterReducer";

const rootReducer = combineReducers({
  notes,
  counter,
});

export default rootReducer;
