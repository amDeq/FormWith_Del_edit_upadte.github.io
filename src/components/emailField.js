import React from "react";
const Email = (props) => {
  return (
    <>
      <input
        type={props.email}
        placeholder="Enter your Email"
        name="userEmail"
        value={props.value}
        onChange={props.onChange}
        required
      />
    </>
  );
};
export default Email;
