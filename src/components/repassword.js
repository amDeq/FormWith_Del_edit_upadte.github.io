import React from "react";
const Repassword = (props) => {
  return (
    <>
      <input
        type={props.password}
        placeholder="Enter your Repassword"
        name={props.repassword}
        value={props.value}
        onChange={props.onChange}
        required
      />
    </>
  );
};
export default Repassword;
