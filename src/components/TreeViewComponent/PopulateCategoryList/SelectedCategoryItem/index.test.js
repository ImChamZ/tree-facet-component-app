import SelectedCategoryItem from ".";
import TestUtils from "../../../../utils/TestUtils";

const validElement = {
  id: "21250",
  count: 15,
  parent: "14665",
  name: "Jassen",
  isSelected: true,
};

describe("SelectedCategoryItem component", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = TestUtils.getConnectedComponentWrapper(SelectedCategoryItem);
  });

  describe("SelectedCategoryItem snapshot render tests", () => {
    it("Render SelectedCategoryItem without passing a valid element test", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("Render SelectedCategoryItem with passing a valid element test", () => {
      wrapper = TestUtils.getConnectedComponentWrapper(SelectedCategoryItem, {
        element: validElement,
      });
      expect(wrapper).toMatchSnapshot();
    });
  });

  it("Category item label value test", () => {
    const { name, count } = validElement;
    const expectedLabel = `${name} (${count})`;
    const actualLabel = wrapper.find("label").text();
    expect(actualLabel).toBe(expectedLabel);
  });
});
