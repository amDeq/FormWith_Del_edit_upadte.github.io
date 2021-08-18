import React from "react";
import InputField from "./InputField";
import RadioButtons from "./RadioButtons";
import SelectInput from "./SelectInput";

const FormFilds = (props) => {
  return (
    <>
      <p className="formFiled">
        <InputField
          type="text"
          placeholder="Enter your Name"
          name="fullname"
          value={props.fullname}
          onChange={props.onChange}
        />
        <p>{props.message}</p>
      </p>
      <p className="formFiled">
        <InputField
          type="email"
          placeholder="Enter your email"
          name="userEmail"
          value={props.userEmail}
          onChange={props.onChange}
        />
      </p>
      <p className="formFiled">
        <RadioButtons onChange={props.onChange} />
      </p>
      <p className="formFiled">
        <SelectInput
          name="selectEdu"
          onChange={props.onChange}
          optionHeading="Level of Education(Select options):"
        />
      </p>
      <p className="formFiled">
        <InputField
          type="password"
          placeholder="Enter your Password"
          name="password"
          value={props.password}
          onChange={props.onChange}
        />
      </p>
      <p className="formFiled">
        <InputField
          type="password"
          placeholder="Enter your re-password"
          name="repassword"
          value={props.repassword}
          onChange={props.onChange}
        />
      </p>
      <p>
        {props.btnConten ? (
          <input
            type="submit"
            value="Submit"
            className="btn"
            onClick={props.SubmitBtn}
          />
        ) : (
          <>
            <input
              type="button"
              value="Edit"
              className="btn"
              onClick={props.SubmitBtn}
            />
            <input
              type="button"
              value="Cancel Button"
              className="btn"
              onClick={props.cancel}
            />
          </>
        )}
      </p>
    </>
  );
};
export default FormFilds;
