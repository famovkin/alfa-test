import { combineReducers } from "redux";
import cards from  "./cards";
import filters from  "./filters";

const rootReducer = combineReducers({
  cards,
  filters,
});

export default rootReducer;
