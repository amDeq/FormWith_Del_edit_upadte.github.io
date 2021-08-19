import React, { useState } from "react";
import InputField from "./InputField";
import RadioButtons from "./RadioButtons";
import SelectInput from "./SelectInput";
import RadioOptions from "./RadioOptions";
import SelectOptions from "./SelectOptions";
import Buttons from "./Buttons";
import List from "./List";
const FormField = () => {
  const [getUserInfo, setUserInfo] = useState({
    fullname: "",
    userEmail: "",
    gender: "",
    education: "",
    password: "",
    repassword: "",
  });

  const [items, setItems] = useState([]);
  const [toggleBtnSubmit, setToggleBtnSubmit] = useState(true);
  const [getEditItem, setGetEditItem] = useState(null);
  const [error, setError] = useState("");

  const inputEvent = (event) => {
    const { value, name } = event.target;
    setUserInfo((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const listOfItem = (e) => {
    e.preventDefault();
    if (!getUserInfo.fullname) {
      setError(`enter your full name`);
    } else if (!getUserInfo.userEmail) {
      setError("please enter your Email");
    } else if (getUserInfo.password !== getUserInfo.repassword) {
      setError("check your Email");
    } else if (getUserInfo && !toggleBtnSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === getEditItem) {
            return { ...elem, name: getUserInfo };
          }
          return elem;
        })
      );
    } else {
      setItems((olditem) => {
        const allInputData = {
          id: new Date().getTime().toString(),
          name: getUserInfo,
        };
        return [...olditem, allInputData];
      });
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
  const deleteItemFun = (index) => {
    const deleteItems = items.filter((elem) => {
      return index !== elem.id;
    });
    setItems(deleteItems);
  };
  const editItem = (id) => {
    const editListItem = items.find((elem) => {
      return elem.id === id;
    });
    console.log("edit ho ja", editListItem);
    setToggleBtnSubmit(false);
    setUserInfo(editListItem.name);
    setGetEditItem(id);
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
          <p>{error}</p>
        </p>
        <p className="formFiled">
          <InputField
            type="email"
            placeholder="Enter your email"
            name="userEmail"
            value={getUserInfo.userEmail}
            onChange={inputEvent}
          />
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
        </p>
        <p className="formFiled">
          <InputField
            type="password"
            placeholder="Enter your re-password"
            name="repassword"
            value={getUserInfo.repassword}
            onChange={inputEvent}
          />
        </p>
        <p>
          {toggleBtnSubmit ? (
            <Buttons
              type="submit"
              className="btn"
              onClick={listOfItem}
              text="Submit"
            />
          ) : (
            <>
              <Buttons
                type="button"
                onClick={listOfItem}
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
      <List items={items} deleteItemFun={deleteItemFun} editItem={editItem} />
    </>
  );
};
export default FormField;
