import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import RadioButtons from "./RadioButtons";
import SelectInput from "./SelectInput";
import RadioOptions from "./RadioOptions";
import SelectOptions from "./SelectOptions";
import Buttons from "./Buttons";
import Validation from "./Validation";

const FormField = (props) => {
  const [getUserInfo, setUserInfo] = useState({
    fullname: "",
    userEmail: "",
    gender: "",
    education: "",
    password: "",
    repassword: "",
  });
  useEffect(() => {
    setUserInfo(props.editValue);
  }, [props.editValue]);
  const [errors, setErrors] = useState({});

  const inputEvent = (event) => {
    const { value, name } = event.target;
    setUserInfo((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    setErrors(Validation(getUserInfo));
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (!getUserInfo.fullname) {
      setErrors(Validation(getUserInfo));
    } else if (!getUserInfo.userEmail) {
      setErrors(Validation(getUserInfo));
    } else if (!getUserInfo.password) {
      setErrors(Validation(getUserInfo));
    } else if (!getUserInfo.repassword) {
      setErrors(Validation(getUserInfo));
    } else if (getUserInfo && !props.toggleBtn) {
      // props.addItem(
      //   props.items.map((elem) => {
      //     if (elem.id === props.editGetId) {
      //       return { ...elem, name: getUserInfo };
      //     }
      //     return elem;
      //   })
      // );
      // props.addItem({ name: getUserInfo });
      props.addItem(getUserInfo);
    } else {
      props.addItem(getUserInfo);
    }
    setUserInfo({
      fullname: "",
      userEmail: "",
      gender: "",
      education: "",
      password: "",
      repassword: "",
    });
  };
  const cancelButton = () => {
    setUserInfo({
      fullname: "",
      userEmail: "",
      gender: "",
      education: "",
      password: "",
      repassword: "",
    });
  };
  return (
    <>
      <form className="formBox">
        <p className="formFiled">
          <InputField
            type="text"
            placeholder="Enter your Name"
            name="fullname"
            value={getUserInfo.fullname}
            onChange={inputEvent}
          />
          {errors.fullname && <p className="error">{errors.fullname}</p>}
        </p>
        <p className="formFiled">
          <InputField
            type="email"
            placeholder="Enter your email"
            name="userEmail"
            value={getUserInfo.userEmail}
            onChange={inputEvent}
          />
          {errors.userEmail && <p className="error">{errors.userEmail}</p>}
        </p>
        <p className="formFiled">
          <RadioButtons
            onChange={inputEvent}
            options={RadioOptions}
            radioHeading="Gender"
          />
        </p>
        <p className="formFiled">
          <SelectInput
            name="selectEdu"
            onChange={inputEvent}
            optionHeading="Level of Education(Select options):"
            options={SelectOptions}
          />
        </p>
        <p className="formFiled">
          <InputField
            type="password"
            placeholder="Enter your Password"
            name="password"
            value={getUserInfo.password}
            onChange={inputEvent}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </p>
        <p className="formFiled">
          <InputField
            type="password"
            placeholder="Enter your re-password"
            name="repassword"
            value={getUserInfo.repassword}
            onChange={inputEvent}
          />
          {errors.repassword && <p className="error">{errors.repassword}</p>}
        </p>
        <p className="formFiled">
          {props.toggleBtn ? (
            <Buttons
              type="submit"
              className="btn"
              onClick={submitForm}
              text="Submit"
            />
          ) : (
            <>
              <Buttons
                type="button"
                onClick={submitForm}
                text="Edit"
                className="btn"
              />
              <Buttons
                type="button"
                onClick={cancelButton}
                text="Cancel Button"
                className="btn"
              />
            </>
          )}
        </p>
      </form>
    </>
  );
};
export default FormField;
