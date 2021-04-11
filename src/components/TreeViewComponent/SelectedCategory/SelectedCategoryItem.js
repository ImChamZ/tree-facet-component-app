import React from "react";

const SelectedCategoryItem = ({
  item,
  isParent,
  isTreeView,
  removeSelected,
  getParentNameBreadcrumb,
}) => {
  const { id, isSelected, count, name, children, parent } = item;
  return (
    <>
      {isTreeView ? (
        <div key={id} className={"product-row"}>
          {isSelected && (
            <div className="data-row">
              <i
                className={`fa fa-trash-o tree-view ${isParent && "parent"}`}
                aria-hidden="true"
                onClick={() => removeSelected(item)}
              ></i>
              <label className={isParent && "parent-row"}>{name}</label>({count}
              )
            </div>
          )}
          {children.map((childItem) => (
            <SelectedCategoryItem
              key={childItem.id}
              item={childItem}
              isTreeView={isTreeView}
              removeSelected={removeSelected}
              getParentNameBreadcrumb={getParentNameBreadcrumb}
            />
          ))}
        </div>
      ) : (
        <>
          {isSelected && (
            <>
              <div id={id} className="row data-row selected">
                <div class="container m-0">
                  <div class="row">
                    <div class="col-sm details-row">
                      <label className={""}>{`${name} (${count})`}</label>
                      <i
                        className="fa fa-trash-o mr-2"
                        aria-hidden="true"
                        title="Remove Category"
                        onClick={() => removeSelected(item)}
                      ></i>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm breadcrumb-row">
                      {getParentNameBreadcrumb(parent).join(" / ")}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {children.map((childItem) => (
            <SelectedCategoryItem
              key={childItem.id}
              item={childItem}
              isTreeView={isTreeView}
              removeSelected={removeSelected}
              getParentNameBreadcrumb={getParentNameBreadcrumb}
            />
          ))}
        </>
      )}
    </>
  );
};

export default SelectedCategoryItem;
