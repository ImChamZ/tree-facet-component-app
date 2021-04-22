import GrowingLoader from ".";
import TestUtils from "../../../utils/TestUtils";

describe("GrowingLoader component", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = TestUtils.getComponentWrapper(GrowingLoader);
  });

  it("GrowingLoader snapshot render test", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
