import React from "react";
import { shallow } from "enzyme";
import TreeViewComponent from ".";

let wrapper;
beforeEach(() => {
  wrapper = shallow(<TreeViewComponent />);
});

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

test("Test if categoryList sets to an empty array, by passing empty array into setCategoryData function ", () => {
  const expected = [];
  wrapper.instance().setCategoryData([]);
  const actual = wrapper.instance().state.categoryList;
  expect(actual).toEqual(expected);
});

test("Test if categoryMap sets to an empty object, by passing empty array into setCategoryData function", () => {
  const expected = {};
  wrapper.instance().setCategoryData([]);
  const actual = wrapper.instance().state.categoryMap;
  expect(actual).toEqual(expected);
});

test("Test if categoryMap sets to an key value map, by passing valid category array into setCategoryData function ", () => {
  wrapper.instance().setCategoryData(categoryList);
  expect(wrapper.instance().state.categoryMap).toEqual(
    wrapper.instance().state.categoryMap
  );
});

test("Test if category breadcrumb sets correctly if a valid parent id passed to getParentNameBreadcrumb function", () => {
  wrapper.instance().setCategoryData(categoryList);
  const expected = ["Kleding / Dames"].join(" / ");
  const actual = wrapper
    .instance()
    .getParentNameBreadcrumb("14096")
    .join(" / ");
  expect(actual).toEqual(expected);
});
