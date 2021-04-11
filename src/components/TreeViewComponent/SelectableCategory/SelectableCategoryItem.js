import React, { useState } from "react";

const SelectableCategoryItem = ({ item, isParent, getSelectedCategories }) => {
  const [isShowChildNodes, setShowChildNodes] = useState(false);

  const onSelectChanged = (e) => {
    const { target } = e;
    const { checked } = target;
    getSelectedCategories(item, checked);
  };

  const checkChildNodes = (element, selected) => {
    element.isSelected = selected;
    element.children.forEach((e) => {
      checkChildNodes(e, selected);
    });
  };

  const { id, children, isSelected, name, count } = item;

  return (
    <>
      <div key={id} className="product-row">
        <div className="data-row">
          <span className={`action-wrapper ${isParent && "parent"}`}>
            {children.length > 0 && (
              <i
                onClick={() => setShowChildNodes(!isShowChildNodes)}
                className={`fa fa-chevron-${isShowChildNodes ? "up" : "right"}`}
                aria-hidden="true"
                title="Toggle view"
              ></i>
            )}
            <input
              type="checkbox"
              title="Select"
              checked={isSelected}
              onChange={(e) => onSelectChanged(e)}
            />
          </span>

          <label
            onClick={() => setShowChildNodes(!isShowChildNodes)}
            className={isParent && "parent-row"}
          >
            {`${name} (${count})`}
          </label>
          {isShowChildNodes &&
            children.map((childItem) => (
              <SelectableCategoryItem
                key={childItem.id}
                item={childItem}
                getSelectedCategories={getSelectedCategories}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default SelectableCategoryItem;
