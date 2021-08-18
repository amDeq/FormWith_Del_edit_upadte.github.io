import React from "react";
import InputField from "./InputField";
import RadioButtons from "./RadioButtons";
import SelectInput from "./SelectInput";
import RadioOptions from "./RadioOptions";
import SelectOptions from "./SelectOptions";
import Buttons from "./Buttons";
const FormField = (props) => {
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
        <RadioButtons
          onChange={props.onChange}
          options={RadioOptions}
          radioHeading="Gender"
        />
      </p>
      <p className="formFiled">
        <SelectInput
          name="selectEdu"
          onChange={props.onChange}
          optionHeading="Level of Education(Select options):"
          options={SelectOptions}
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
          <Buttons
            type="submit"
            className="btn"
            onClick={props.SubmitBtn}
            text="Submit"
          />
        ) : (
          <>
            <Buttons
              type="button"
              className="btn"
              onClick={props.SubmitBtn}
              text="Edit"
            />
            <Buttons
              type="button"
              className="btn"
              onClick={props.cancel}
              text="Cancel Button"
            />
          </>
        )}
      </p>
    </>
  );
};
export default FormField;
