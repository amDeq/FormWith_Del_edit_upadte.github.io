import React, { useState } from "react";
import List from "./List";
import FormField from "./FormField";

const FormSection = () => {
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
        <FormField
          fullname={getUserInfo.fullname}
          userEmail={getUserInfo.userEmail}
          password={getUserInfo.password}
          repassword={getUserInfo.repassword}
          SubmitBtn={listOfItem}
          onChange={inputEvent}
          btnConten={toggleBtnSubmit}
          cancel={cancelButton}
          message={error}
        />
      </form>
      <List
        itemsList={items}
        onChangeList={deleteItemFun}
        onChangeEdit={editItem}
      />
    </>
  );
};
export default FormSection;
