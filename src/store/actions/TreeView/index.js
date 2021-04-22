/**
 * Describes the possible actions that can be dispatched to TreeViewReducer.
 *
 * @author Chamara Chathuranga
 */

import {
  SET_SELECTED_CATEGORY_LIST,
  REMOVE_SELECTED_CATEGORY_ITEM,
  CLEAR_SELECTED_CATEGORY_LIST,
  TOGGLE_SELECTED_CATEGORY_VIEW_TYPE,
} from "./ActionTypes";

export const setSelectedCategoryList = (selectedCategoryList) => {
  return { type: SET_SELECTED_CATEGORY_LIST, payload: selectedCategoryList };
};

export const removeSelectedCategoryItem = (selectedId) => {
  return { type: REMOVE_SELECTED_CATEGORY_ITEM, payload: selectedId };
};

export const clearSelectedCategoryList = () => {
  return { type: CLEAR_SELECTED_CATEGORY_LIST };
};

export const toggleSelectedCategoryViewType = () => {
  return { type: TOGGLE_SELECTED_CATEGORY_VIEW_TYPE };
};
