import React from "react";
const SelectInput = (props) => {
  return (
    <>
      <label className="selectMenu">
        {props.optionHeading}
        <select name={props.name} onChange={props.onChange}>
          {props.options.map((elem) => {
            return <option value={elem.value}>{elem.text}</option>;
          })}
        </select>
      </label>
    </>
  );
};
export default SelectInput;
