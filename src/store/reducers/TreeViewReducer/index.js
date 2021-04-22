/**
 * Handles all possible actions triggers using tree view actions.
 *
 * @author Chamara Chathuranga
 */

import {
  SET_SELECTED_CATEGORY_LIST,
  REMOVE_SELECTED_CATEGORY_ITEM,
  CLEAR_SELECTED_CATEGORY_LIST,
  TOGGLE_SELECTED_CATEGORY_VIEW_TYPE,
} from "../../actions/TreeView/ActionTypes";

const initialState = {
  showAsTree: false,
  selectedCategoryList: [],
};

const removeSelectedCategoryItem = (currentItem, selectedId) => {
  if (currentItem.id === selectedId) {
    return false;
  }
  return (currentItem.children = currentItem.children.filter(
    (currentChildItem) =>
      removeSelectedCategoryItem(currentChildItem, selectedId)
  ));
};

const treeViewReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SELECTED_CATEGORY_LIST:
      return {
        ...state,
        selectedCategoryList: payload,
      };
    case REMOVE_SELECTED_CATEGORY_ITEM:
      const newSelectedList = state.selectedCategoryList.filter(
        (currentItem) => {
          return removeSelectedCategoryItem(currentItem, payload);
        }
      );
      return {
        ...state,
        selectedCategoryList: newSelectedList,
      };
    case CLEAR_SELECTED_CATEGORY_LIST:
      return {
        ...state,
        selectedCategoryList: [],
      };
    case TOGGLE_SELECTED_CATEGORY_VIEW_TYPE:
      return {
        ...state,
        showAsTree: !state.showAsTree,
      };
    default:
      return state;
  }
};

export default treeViewReducer;
