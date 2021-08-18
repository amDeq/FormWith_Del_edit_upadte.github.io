import React from "react";
import SelectOptions from "./SelectOptions";
const SelectInput = (props) => {
  return (
    <>
      <label className="selectMenu">
        {props.optionHeading}
        <select name={props.name} onChange={props.onChange}>
          {SelectOptions.map((elem) => {
            return <option value={elem.value}>{elem.text}</option>;
          })}
        </select>
      </label>
    </>
  );
};
export default SelectInput;
