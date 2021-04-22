/**
 * TestUtils class contains functions which can be used for unit testing.
 *
 * @author Chamara Chathuranga
 */

import React, { Component } from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";

class TestUtils {
  /**
   * Create a shallow wrapper of a provided component.
   * @param {Component} Component name of the component
   * @param {Object} props props object
   * @returns {Object} the transformed shallow wrapper of the component
   */
  getComponentWrapper(Component, props = {}) {
    return shallow(<Component {...props} />);
  }

  /**
   * Create a shallow wrapper of a provided connected component.
   * @param {Component} Component name of the component
   * @param {Object} props props object
   * @returns {Object} the transformed shallow wrapper of the component
   */
  getConnectedComponentWrapper(Component, props = {}) {
    const mockStore = configureMockStore();
    const store = mockStore();
    return shallow(<Component store={store} {...props} />)
      .childAt(0)
      .dive();
  }
}

export default new TestUtils();
