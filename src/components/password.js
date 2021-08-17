import React from "react";
const Password = (props) => {
  return (
    <>
      <input
        type={props.password}
        placeholder="Enter your password"
        name={props.password}
        value={props.value}
        onChange={props.onChange}
        required
      />
    </>
  );
};
export default Password;
