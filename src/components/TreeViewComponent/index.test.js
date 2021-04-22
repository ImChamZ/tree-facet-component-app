import TreeViewComponent from ".";
import TestUtils from "../../utils/TestUtils";

const categoryList = [
  {
    id: "14096",
    count: 137,
    parent: "14100",
    name: "Kleding",
  },
  {
    id: "14098",
    count: 2,
    parent: "14096",
    name: "Badmode",
  },
  {
    id: "14100",
    count: 136,
    parent: "0",
    name: "Dames",
  },
  {
    id: "14101",
    count: 17,
    parent: "14096",
    name: "Broeken",
  },
];

describe("TreeView component", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = TestUtils.getConnectedComponentWrapper(TreeViewComponent);
  });

  it("TreeViewComponent snapshot render test", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("Child component render tests", () => {
    it("Availability of ListRenderer component test", () => {
      expect(wrapper.find("ListRenderer")).toHaveLength(2);
    });

    it("Availability of GrowingLoader component test", () => {
      expect(wrapper.find("GrowingLoader")).toHaveLength(1);
    });
  });

  describe("setCategoryData method tests", () => {
    it("Test if categoryList sets to an empty array, by passing empty array test", () => {
      const expected = [];
      wrapper.instance().setCategoryData([]);
      const actual = wrapper.instance().state.categoryList;
      expect(actual).toEqual(expected);
    });

    it("Test if categoryList populates correctly, by passing a valid category array test", () => {
      const expected = wrapper.instance().state.categoryList;
      wrapper.instance().setCategoryData(categoryList);
      expect(expected).toEqual(expected);
    });

    it("Test if categoryMap sets to an empty object, by passing empty array test", () => {
      const expected = {};
      wrapper.instance().setCategoryData([]);
      const actual = wrapper.instance().state.categoryMap;
      expect(actual).toEqual(expected);
    });

    it("Test if categoryMap populates to a map, by passing valid category array test", () => {
      const expected = wrapper.instance().state.categoryMap;
      wrapper.instance().setCategoryData(categoryList);
      expect(expected).toEqual(expected);
    });
  });

  describe("Breadcrumb tests", () => {
    it("Test if breadcrumb label sets to empty string, by passing an invalid parent id test", () => {
      const expected = "";
      wrapper.instance().setCategoryData(categoryList);
      const actual = wrapper.instance().getParentBreadcrumbString("invalidId");
      expect(actual).toEqual(expected);
    });

    it("Test if breadcrumb label sets correctly, by passing a valid parent id test", () => {
      const expected = ["Dames / Kleding"].join(" / ");
      wrapper.instance().setCategoryData(categoryList);
      const actual = wrapper.instance().getParentBreadcrumbString("14096");
      expect(actual).toEqual(expected);
    });
  });

  describe("setSelectedCategories method tests", () => {
    it("Test setting the 'isSelected' status true to a valid element test", () => {
      const expected = true;
      wrapper.instance().setCategoryData(categoryList);
      const selectedItem = wrapper.instance().state.categoryList[0];
      wrapper.instance().setSelectedCategories(selectedItem, expected);
      expect(selectedItem.isSelected).toBe(expected);
    });

    it("Test setting the 'isSelected' status false to a valid element test", () => {
      const expected = false;
      wrapper.instance().setCategoryData(categoryList);
      const selectedItem = wrapper.instance().state.categoryList[0];
      wrapper.instance().setSelectedCategories(selectedItem, expected);
      expect(selectedItem.isSelected).toBe(expected);
    });

    it("Test setting the 'isSelected' status to an invalid element test", () => {
      const expected = undefined;
      wrapper.instance().setCategoryData(categoryList);
      const selectedItem = wrapper.instance().state.categoryList[5];
      wrapper.instance().setSelectedCategories(selectedItem, expected);
      expect(selectedItem?.isSelected).toBe(expected);
    });
  });

  it("Click Toggle View icon button test", () => {
    wrapper.find({ title: "Toggle View" }).simulate("click");
  });
});
