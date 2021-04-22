import React, { useState } from "react";
import ListRenderer from "../../../common/Hoc/ListRenderer";

const SelectableCategoryItem = ({
  element,
  setSelectedCategories = () => {},
}) => {
  const [showChildNodes, setShowChildNodeState] = useState(false);

  if (!element) return null;
  const { id, parent, children, isSelected, name, count } = element;
  const isParent = parent === "0";

  const onSelectCheckboxChange = (event) => {
    const {
      target: { checked },
    } = event;
    setSelectedCategories(element, checked);
  };

  return (
    <div key={id} className="product-row">
      <div className="data-row selectable">
        <span className={`action-wrapper ${isParent ? "parent" : ""}`}>
          {(children || []).length > 0 && (
            <i
              onClick={() => setShowChildNodeState(!showChildNodes)}
              className={`fa fa-chevron-${showChildNodes ? "up" : "right"}`}
              aria-hidden="true"
              title="Toggle view"
            ></i>
          )}
          <input
            id={id}
            type="checkbox"
            title="Select"
            checked={isSelected}
            onChange={(event) => onSelectCheckboxChange(event)}
          />
        </span>

        <label
          onClick={() => setShowChildNodeState(!showChildNodes)}
          className={isParent ? "parent-row" : ""}
        >
          {`${name} (${count})`}
        </label>
        {showChildNodes && (
          <ListRenderer
            elementList={children}
            setSelectedCategories={setSelectedCategories}
          >
            <SelectableCategoryItem />
          </ListRenderer>
        )}
      </div>
    </div>
  );
};

export default SelectableCategoryItem;
