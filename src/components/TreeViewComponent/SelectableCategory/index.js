import React from "react";
import SelectableCategoryItem from "./SelectableCategoryItem";

const SelectableCategory = ({ categoryList, getSelectedCategories }) => {
  return (
    <>
      {categoryList.map((item) => (
        <SelectableCategoryItem
          key={item.id}
          item={item}
          getSelectedCategories={getSelectedCategories}
          isParent={true}
        />
      ))}
    </>
  );
};

export default SelectableCategory;
