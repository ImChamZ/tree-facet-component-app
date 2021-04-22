import React from "react";

const EventButton = ({ classNames, onSubmit = () => {}, label = "" }) => {
  return (
    <button className={`btn ${classNames}`} onClick={() => onSubmit()}>
      {label}
    </button>
  );
};
export default EventButton;
