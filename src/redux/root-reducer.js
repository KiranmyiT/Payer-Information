import { combineReducers } from "redux";
import payersReducers from "./reducer";

const rootReducer = combineReducers({
  data: payersReducers,
});

export default rootReducer;
