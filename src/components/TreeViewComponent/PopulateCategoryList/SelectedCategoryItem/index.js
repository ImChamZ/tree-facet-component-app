import React from "react";
import { connect } from "react-redux";
import { removeSelectedCategoryItem } from "../../../../store/actions/TreeView";
import ListRenderer from "../../../common/Hoc/ListRenderer";

const SelectedCategoryItem = ({
  element,
  isParent,
  showAsTree,
  dispatch = () => {},
  getParentBreadcrumbString = () => {},
}) => {
  if (!element) return null;
  const { id, isSelected, count, name, children, parent } = element;

  const removeSelectedItem = (selectedId) => {
    dispatch(removeSelectedCategoryItem(selectedId));
  };

  const drawChildNodeList = () => {
    return (
      <ListRenderer
        elementList={children}
        showAsTree={showAsTree}
        dispatch={dispatch}
        getParentBreadcrumbString={getParentBreadcrumbString}
      >
        <SelectedCategoryItem />
      </ListRenderer>
    );
  };

  const getLabelText = () => {
    return `${name} (${count})`;
  };

  return (
    <>
      {showAsTree ? (
        <div key={id} className={`${isSelected && "product-row"}`}>
          {isSelected && (
            <div className="data-row">
              <i
                className={`fa fa-trash-o tree-view ${isParent && "parent"}`}
                aria-hidden="true"
                onClick={() => removeSelectedItem(id)}
              ></i>
              <label className={isParent && "parent-row"}>
                {getLabelText()}
              </label>
            </div>
          )}
          {drawChildNodeList()}
        </div>
      ) : (
        <>
          {isSelected && (
            <div id={id} className="row data-row selected">
              <div className="container m-0">
                <div className="row">
                  <div className="col-sm details-row">
                    <label>{getLabelText()}</label>
                    <i
                      className="fa fa-trash-o mr-2"
                      aria-hidden="true"
                      title="Remove Category"
                      onClick={() => removeSelectedItem(id)}
                    ></i>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm breadcrumb-row">
                    {getParentBreadcrumbString(parent)}
                  </div>
                </div>
              </div>
            </div>
          )}
          {drawChildNodeList()}
        </>
      )}
    </>
  );
};
const mapStateToProps = (state, ownProps) => {
  const { treeView } = state;
  return {
    ...ownProps,
    ...treeView,
  };
};
export default connect(mapStateToProps, null)(SelectedCategoryItem);
