import React from "react";
import Name from "./nameField";
import Email from "./emailField";
import Radiobutton from "./radioButtons";
import Selectoptions from "./selectInput";
import Repassword from "./repassword";

const FormFild = (props) => {
  return (
    <>
      <p className="formFiled">
        <Name text="text" value={props.fullname} onChange={props.onChange} />
        <p>{props.message}</p>
      </p>
      <p className="formFiled">
        <Email
          email="email"
          value={props.userEmail}
          onChange={props.onChange}
          className={props.inputClass}
        />
      </p>
      <p className="formFiled">
        <Radiobutton
          radio="radio"
          female="Female"
          male="Male"
          onChange={props.onChange}
          name="gender"
        />
      </p>
      <p className="formFiled">
        <Selectoptions name="selectEdu" onChange={props.onChange} />
      </p>
      <p className="formFiled">
        <Repassword
          password="password"
          repassword="password"
          value={props.password}
          onChange={props.onChange}
        />
      </p>
      <p className="formFiled">
        <Repassword
          password="password"
          repassword="repassword"
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
export default FormFild;
