import SelectableCategoryItem from ".";
import TestUtils from "../../../../utils/TestUtils";

const validElement = {
  id: "14666",
  count: 93,
  parent: "14126",
  name: "Girls",
  isSelected: false,
  children: [
    {
      id: "21284",
      count: 1,
      parent: "14666",
      name: "Spijkerbroeken",
      children: [],
      isSelected: true,
    },
  ],
};

describe("SelectableCategoryItem component", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = TestUtils.getComponentWrapper(SelectableCategoryItem);
  });

  describe("SelectableCategoryItem snapshot render tests", () => {
    it("Render SelectableCategoryItem without passing a valid elements", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("Render SelectableCategoryItem with passing a valid elements", () => {
      wrapper = TestUtils.getComponentWrapper(SelectableCategoryItem, {
        element: validElement,
      });
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("Select category item checkbox tests", () => {
    it("Set checkbox checked status to true test", () => {
      let checkbox = wrapper.find({ type: "checkbox" });
      expect(checkbox.props().checked).toBe(false);
    });

    it("Set checkbox checked status to false test", () => {
      validElement.isSelected = true;
      wrapper = TestUtils.getComponentWrapper(SelectableCategoryItem, {
        element: validElement,
      });
      let checkbox = wrapper.find({ type: "checkbox" });
      expect(checkbox.props().checked).toBe(true);
    });

    it("Set checkbox checked status to true of all items test", () => {
      wrapper.find("input").forEach((node) => {
        expect(node.props().checked).toEqual(true);
      });
    });
  });

  it("Category item label value test", () => {
    const { name, count } = validElement;
    const expectedLabel = `${name} (${count})`;
    const actualLabel = wrapper.find("label").text();
    expect(actualLabel).toBe(expectedLabel);
  });
});
