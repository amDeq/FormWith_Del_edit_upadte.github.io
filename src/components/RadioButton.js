import React from "react";

const RadioButton = (props) => {
  return (
    <>
      <div className="radioButtonFiled">
        <span>{props.radioHeading}</span>
        <div className="radioBtnItem">
          {props.options.map((option) => {
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
export default RadioButton;
