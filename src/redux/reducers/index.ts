import { combineReducers } from "redux";
import cards from  "./cards";
import filters from  "./filters.js";

const rootReducer = combineReducers({
  cards,
  filters,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
