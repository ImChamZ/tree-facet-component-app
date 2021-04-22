/**
 * ListRenderer is a higher order function component which can be used to render a list of elements.
 * Children component expected to be rendered should wrap around the ListRenderer component with props.
 *
 * @author Chamara Chathuranga
 */

import React, { cloneElement } from "react";

const ListRenderer = (props) => {
  const elementList = (props.elementList || []).map((element, index) => (
    <React.Fragment key={element?.id || index}>
      {cloneElement(props?.children, {
        element,
        ...props,
      })}
    </React.Fragment>
  ));
  return elementList;
};

export default ListRenderer;
