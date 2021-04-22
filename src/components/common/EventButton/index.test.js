import EventButton from ".";
import TestUtils from "../../../utils/TestUtils";

describe("EventButton component", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = TestUtils.getComponentWrapper(EventButton);
  });

  it("EventButton snapshot render tests", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("Event Button tests", () => {
    it("Empty button label test", () => {
      const actualLabel = wrapper.find("button").text();
      expect(actualLabel).toBe("");
    });

    it("Valid button label test", () => {
      const label = "Test Label";
      wrapper = TestUtils.getComponentWrapper(EventButton, { label });
      const actualLabel = wrapper.find("button").text();
      expect(actualLabel).toBe(label);
    });

    it("Press button without a callback function test", () => {
      wrapper.find("button").simulate("click");
    });

    it("Press button with passing a callback function test", () => {
      wrapper = TestUtils.getComponentWrapper(EventButton, {
        onSubmit: () => {},
      });
      wrapper.find("button").simulate("click");
    });
  });
});
