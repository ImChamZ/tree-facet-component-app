import React, { Component } from "react";
import { connect } from "react-redux";
import {
  clearSelectedCategoryList,
  setSelectedCategoryList,
  toggleSelectedCategoryViewType,
} from "../../store/actions/TreeView";
import CategoryAPI from "../../utils/api/categoryAPI";
import EventButton from "../common/EventButton";
import GrowingLoader from "../common/GrowingLoader";
import ListRenderer from "../common/Hoc/ListRenderer";
import SelectableCategoryItem from "./PopulateCategoryList/SelectableCategoryItem";
import SelectedCategoryItem from "./PopulateCategoryList/SelectedCategoryItem";

class TreeViewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      categoryList: [],
      categoryMap: {},
    };
    this.setSelectedCategories = this.setSelectedCategories.bind(this);
    this.getParentBreadcrumbString = this.getParentBreadcrumbString.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    CategoryAPI.getCategoryList()
      .then((categoryArray) => {
        this.setCategoryData(categoryArray);
      })
      .catch((error) => {
        console.log("Error loading data!");
      });
  }

  /**
   * Set the category map and category list data via provided array of categories.
   * @param {Array} categoryArray category array list
   */
  setCategoryData(categoryArray) {
    const categoryMap = categoryArray.reduce((categoryMap, item) => {
      item.children = [];
      item.isSelected = false;
      categoryMap[item.id] = item;
      return categoryMap;
    }, {});
    const categoryList = categoryArray.reduce((categoryList, node) => {
      const current = categoryMap[node.id];
      try {
        if (current.parent === "0") {
          categoryList.push(current);
        } else {
          categoryMap[node.parent].children.push(current);
        }
      } catch (error) {
        console.log("Failed to fetch data for ID - " + node.parent);
      }
      return categoryList;
    }, []);
    this.setState({ categoryMap, categoryList, isLoading: false });
  }

  /**
   * Set the selected status of an element, and updates the category list of the state.
   * @param {object} element selected category element
   * @param {boolean} selected boolean value to set
   */
  setSelectedCategories(element, selected) {
    this.toggleElementSelectedStatus(element, selected);
    this.setState({
      categoryList: [...this.state.categoryList],
    });
  }

  /**
   * Toggle the selected status of the provided element, and its children nodes.
   * @param {object} element selected category element
   * @param {boolean} selected boolean value to set
   */
  toggleElementSelectedStatus(element, selected = true) {
    if (element) {
      element.isSelected = selected;
      (element.children || []).forEach((e) => {
        this.toggleElementSelectedStatus(e, selected);
      });
    }
  }

  /**
   * Populates the breadcrumb string of parent names for a provided parent ID.
   * @param {string} parentId parent ID of the element
   * @returns {string} breadcrumb string
   */
  getParentBreadcrumbString(parentId) {
    return this.populateBreadcrumbString(parentId).reverse().join(" / ");
  }

  /**
   * Populates the name array of parent names for a provided parent ID.
   * @param {string} parentId parent ID of the element
   * @param {Array} nameList name list array
   * @returns {Array} name list array of the parents
   */
  populateBreadcrumbString(parentId, nameList = []) {
    if (parentId === "0") return nameList;
    const parentCategory = this.state.categoryMap[parentId];
    if (parentCategory) {
      nameList.push(parentCategory?.name);
      if (parentCategory.parent !== "0") {
        this.populateBreadcrumbString(parentCategory.parent, nameList);
      }
    }
    return nameList;
  }

  render() {
    const { isLoading, categoryList } = this.state;
    const { selectedCategoryList, showAsTree, dispatch } = this.props;

    return (
      <>
        <div className="row p-0 m-0 category-main-row">
          <div className="col-md-6 mt-3 mb-3">
            <div className="card category-card">
              <div className="card-header">
                <EventButton
                  classNames="btn-primary"
                  label=" Add Selected"
                  onSubmit={() => {
                    dispatch(
                      setSelectedCategoryList([
                        ...JSON.parse(JSON.stringify(categoryList)),
                      ])
                    );
                  }}
                ></EventButton>
              </div>
              <div className="card-body category-card-body">
                {isLoading && <GrowingLoader />}
                <ListRenderer
                  elementList={categoryList}
                  setSelectedCategories={this.setSelectedCategories}
                >
                  <SelectableCategoryItem />
                </ListRenderer>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-3 mb-3">
            <div className="card">
              <div className="card-header selected">
                <EventButton
                  classNames="btn-danger"
                  label="Remove All"
                  onSubmit={() => dispatch(clearSelectedCategoryList())}
                ></EventButton>
                <i
                  className={`fa ${
                    showAsTree ? "fa-list" : "fa-indent"
                  } toggle-view-icon`}
                  aria-hidden="true"
                  title="Toggle View"
                  onClick={() => dispatch(toggleSelectedCategoryViewType())}
                ></i>
              </div>
              <div className="card-body">
                <ListRenderer
                  elementList={selectedCategoryList}
                  getParentBreadcrumbString={this.getParentBreadcrumbString}
                >
                  <SelectedCategoryItem />
                </ListRenderer>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { treeView } = state;
  return {
    ...ownProps,
    ...treeView,
  };
};
export default connect(mapStateToProps, null)(TreeViewComponent);
