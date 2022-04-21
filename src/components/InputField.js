import React from "react";

const InputField = (props) => {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        required
      />
    </>
  );
};

export default InputField;
