import ListRenderer from ".";
import TestUtils from "../../../../utils/TestUtils";

const elementList = {
  id: "14126",
  count: 154,
  parent: "0",
  name: "Kids",
  children: [
    {
      id: "14665",
      count: 69,
      parent: "14126",
      name: "Boys",
      children: [
        {
          id: "21250",
          count: 15,
          parent: "14665",
          name: "Jassen",
          children: [],
          isSelected: true,
        },
        {
          id: "21258",
          count: 15,
          parent: "14665",
          name: "T-shirts",
          children: [],
          isSelected: true,
        },
        {
          id: "21260",
          count: 20,
          parent: "14665",
          name: "Broeken",
          children: [],
          isSelected: true,
        },
        {
          id: "21268",
          count: 3,
          parent: "14665",
          name: "Sportkleding",
          children: [],
          isSelected: true,
        },
        {
          id: "21274",
          count: 5,
          parent: "14665",
          name: "Zwemkleding",
          children: [],
          isSelected: true,
        },
        {
          id: "21276",
          count: 28,
          parent: "14665",
          name: "Overige",
          children: [],
          isSelected: true,
        },
      ],
      isSelected: true,
    },
    {
      id: "14666",
      count: 93,
      parent: "14126",
      name: "Girls",
      children: [
        {
          id: "21284",
          count: 1,
          parent: "14666",
          name: "Spijkerbroeken",
          children: [],
          isSelected: true,
        },
        {
          id: "21290",
          count: 9,
          parent: "14666",
          name: "Shirts",
          children: [],
          isSelected: true,
        },
        {
          id: "21292",
          count: 15,
          parent: "14666",
          name: "T-shirts",
          children: [],
          isSelected: true,
        },
        {
          id: "21298",
          count: 27,
          parent: "14666",
          name: "Broeken",
          children: [],
          isSelected: true,
        },
        {
          id: "21306",
          count: 2,
          parent: "14666",
          name: "Sportkleding",
          children: [],
          isSelected: true,
        },
        {
          id: "21308",
          count: 2,
          parent: "14666",
          name: "Zwemkleding",
          children: [],
          isSelected: true,
        },
        {
          id: "21316",
          count: 27,
          parent: "14666",
          name: "Overige",
          children: [],
          isSelected: true,
        },
        {
          id: "21320",
          count: 1,
          parent: "14666",
          name: "Baby rompers",
          children: [],
          isSelected: true,
        },
        {
          id: "21326",
          count: 1,
          parent: "14666",
          name: "Rompers",
          children: [],
          isSelected: true,
        },
        {
          id: "21336",
          count: 14,
          parent: "14666",
          name: "Jassen",
          children: [],
          isSelected: true,
        },
        {
          id: "21338",
          count: 14,
          parent: "14666",
          name: "Rokken",
          children: [],
          isSelected: true,
        },
        {
          id: "21340",
          count: 14,
          parent: "14666",
          name: "Jurken",
          children: [],
          isSelected: true,
        },
      ],
      isSelected: true,
    },
  ],
  isSelected: true,
};

describe("LisRenderer component", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = TestUtils.getComponentWrapper(ListRenderer);
  });

  it("ListRenderer snapshot render test without passing props", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("ListRenderer snapshot render test with passing props", () => {
    wrapper = TestUtils.getComponentWrapper(ListRenderer, elementList);
    expect(wrapper).toMatchSnapshot();
  });
});
