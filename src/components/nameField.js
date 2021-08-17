import React from "react";
const Name = (props) => {
  return (
    <>
      <input
        type={props.text}
        placeholder="Enter your Name"
        name="fullname"
        value={props.value}
        onChange={props.onChange}
        required
      />
    </>
  );
};
export default Name;
