import React, { useState } from "react";
import List from "./List";
import FormFild from "./formsFilds";

const Formsection = () => {
  const [getUserInfo, SetUserInfo] = useState({
    fullname: "",
    userEmail: "",
    gender: "",
    selectEdu: "",
    password: "",
    repassword: "",
  });

  const [items, setItems] = useState([]);
  const [toggleBtnSubmit, setToggleBtnSubmit] = useState(true);
  const [getEditItem, setGetEditItem] = useState(null);
  const [error, setError] = useState("");

  const inputEvent = (event) => {
    const { value, name } = event.target;
    SetUserInfo((prevState) => {
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

    SetUserInfo({
      fullname: "",
      userEmail: "",
      gender: "",
      takeFile: "",
      selectEdu: "",
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
    SetUserInfo(editListItem.name);
    setGetEditItem(id);
    // alert("edit user info");
  };
  const cancelButton = () => {
    SetUserInfo({
      fullname: "",
      userEmail: "",
      gender: "",
      takeFile: "",
      selectEdu: "",
      password: "",
      repassword: "",
    });
  };
  return (
    <>
      <form className="formBox">
        <FormFild
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
export default Formsection;
