import React from "react";
import RadioOptions from "./RadioOptions";
const RadioButtons = (props) => {
  return (
    <>
      <div className="radioButtonFiled">
        <span>Gender</span>
        <div className="radioBtnItem">
          {RadioOptions.map((option) => {
            return (
              <>
                <input
                  type={option.type}
                  name={option.name}
                  value={option.value}
                  onChange={props.onChange}
                  id={option.id}
                />
                  <label htmlFor={option.id}>{option.value}</label>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default RadioButtons;
