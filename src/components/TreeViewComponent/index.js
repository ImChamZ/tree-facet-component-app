import React, { Component, useEffect, useState } from "react";
import CategoryAPI from "../../utils/api/categoryAPI";
import GrowingLoader from "../common/GrowingLoader";
import SelectableCategory from "./SelectableCategory";
import SelectedCategory from "./SelectedCategory";

class TreeViewComponent extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      categoryList: [],
      categoryMap: {},
      selectedNodeList: [],
      isTreeView: false,
    };
    this.getSelectedCategories = this.getSelectedCategories.bind(this);
    this.setSelectedStatus = this.setSelectedStatus.bind(this);
    this.removeSelected = this.removeSelected.bind(this);
    this.removeAllSelected = this.removeAllSelected.bind(this);
    this.getParentNameBreadcrumb = this.getParentNameBreadcrumb.bind(this);
    this.getParentBreadcrumb = this.getParentBreadcrumb.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    CategoryAPI.getCategoryList().then((categoryArray) => {
      this.setCategoryData(categoryArray);
    });
  }

  setCategoryData(categoryArray) {
    const categoryMap = categoryArray.reduce((acc, el, i) => {
      el.children = [];
      el.isSelected = false;
      acc[el.id] = el;
      return acc;
    }, {});
    const categoryList = categoryArray.reduce((t, node) => {
      const current = categoryMap[node.id];
      try {
        if (current.parent === "0") {
          t.push(current);
        } else {
          categoryMap[node.parent].children.push(current);
        }
      } catch (error) {
        console.log("Failed to fetch data for ID - " + node.parent);
      }
      return t;
    }, []);
    this.setState({ categoryMap, categoryList, isLoading: false });
  }

  getSelectedCategories(element, selected) {
    this.setSelectedStatus(element, selected);
    this.setState({
      categoryList: [...this.state.categoryList],
    });
  }

  removeSelected(item) {
    this.setSelectedStatus(item, false);
    this.setState({
      categoryList: [...this.state.categoryList],
    });
  }

  removeAllSelected() {
    this.setState({
      selectedNodeList: [],
    });
  }

  setSelectedStatus(element, selected) {
    element.isSelected = selected;
    element.children.forEach((e) => {
      this.setSelectedStatus(e, selected);
    });
  }

  getParentNameBreadcrumb(id) {
    return this.getParentBreadcrumb(id);
  }

  getParentBreadcrumb(id, nameList = []) {
    if (id === "0") return nameList;
    const parentName = this.state.categoryMap[id];
    nameList.push(parentName?.name);
    if (parentName.parent !== "0") {
      this.getParentBreadcrumb(parentName.parent, nameList);
    }
    return nameList;
  }

  render() {
    const {
      isLoading,
      isTreeView,
      categoryList,
      selectedNodeList,
    } = this.state;
    return (
      <>
        <div className="row category-main-row">
          <div className="col-md-6 mt-3 mb-3">
            <div className="card category-card">
              <div className="card-header">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    this.setState({
                      selectedNodeList: JSON.parse(
                        JSON.stringify(categoryList)
                      ),
                    });
                  }}
                >
                  Add Selected Category(s)
                </button>
              </div>
              <div className="card-body category-card-body">
                {isLoading && <GrowingLoader />}
                <SelectableCategory
                  categoryList={categoryList}
                  getSelectedCategories={this.getSelectedCategories}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-3 mb-3">
            <div className="card">
              <div className="card-header">
                <button
                  className="btn btn-danger"
                  onClick={() => this.removeAllSelected()}
                >
                  Remove All Select Category(s)
                </button>
                <button
                  className="btn btn-link ml-2"
                  onClick={() => this.setState({ isTreeView: !isTreeView })}
                >
                  Change View
                </button>
              </div>
              <div className="card-body">
                <SelectedCategory
                  nodeList={selectedNodeList}
                  isTreeView={isTreeView}
                  removeSelected={this.removeSelected}
                  getSelectedCategories={this.getSelectedCategories}
                  getParentNameBreadcrumb={this.getParentNameBreadcrumb}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TreeViewComponent;
