import React from "react";
const Radiobutton = (props) => {
  return (
    <>
      <div className="radioButtonFiled">
        <span>Gender</span>
        <div className="radioBtnItem">
          <input
            type={props.radio}
            name={props.name}
            value={props.male}
            onChange={props.onChange}
            id="male"
          />
            <label htmlFor="male">Male</label>
        </div>
        <div className="radioBtnItem">
          <input
            type={props.radio}
            name={props.name}
            value={props.female}
            onChange={props.onChange}
            id="female"
          />
            <label htmlFor="female">Female</label>
        </div>
      </div>
    </>
  );
};
export default Radiobutton;
