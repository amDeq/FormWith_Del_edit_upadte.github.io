import React from "react";
import options from "./userselectdata";
const Selectoptions = (props) => {
  return (
    <>
      <label className="selectMenu">
        Level of Education(Select options):
        <select name={props.name} onChange={props.onChange}>
          {options.map((elem) => {
            return <option value={elem.value}>{elem.text}</option>;
          })}
        </select>
      </label>
    </>
  );
};
export default Selectoptions;
