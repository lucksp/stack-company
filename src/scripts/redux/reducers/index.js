import { combineReducers } from "redux";
import company from "./company";
import employees from "./employees";

export default combineReducers({
  company,
  employees
});
