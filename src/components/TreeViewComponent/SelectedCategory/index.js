import React from "react";
import SelectedCategoryItem from "./SelectedCategoryItem";

const SelectedCategory = ({
  nodeList,
  isTreeView,
  removeSelected,
  getSelectedCategories,
  getParentNameBreadcrumb,
}) => {
  return (
    <>
      {nodeList.map((item) => (
        <SelectedCategoryItem
          key={item.id}
          item={item}
          isParent={true}
          isTreeView={isTreeView}
          removeSelected={removeSelected}
          getSelectedCategories={getSelectedCategories}
          getParentNameBreadcrumb={getParentNameBreadcrumb}
        />
      ))}
    </>
  );
};

export default SelectedCategory;
