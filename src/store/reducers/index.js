/**
 * Describe the reducers which are used across the application
 * All reduces should list/ register here
 *
 * @author Chamara Chathuranga
 */

import { combineReducers } from "redux";
import treeViewReducer from "./TreeViewReducer";

export default combineReducers({
  treeView: treeViewReducer,
});
