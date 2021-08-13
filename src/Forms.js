import React, { useState } from "react";
import List from "./components/List";
import FormFild from "./components/formsFilds";

const FormSection = () => {
  const [getUserInfo, SetUserInfo] = useState({
    fullname: "",
    userEmail: "",
    gender: "",
    takeFile: "",
    selectEdu: "",
    password: "",
    Repassword: "",
  });

  const [items, setItems] = useState([]);
  const [toggleBtnSubmit, setToggleBtnSubmit] = useState(true);
  const [getEditItem, setGetEditItem] = useState(null);
  const inputEvent = (event) => {
    //console.log(event.target.value);
    //console.log(event.target.name);
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
    if (!getUserInfo) {
      alert("fill your form");
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
      Repassword: "",
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
  return (
    <>
      <form className="formBox">
        <FormFild
          fullname={getUserInfo.fullname}
          userEmail={getUserInfo.userEmail}
          takeFile={getUserInfo.takeFile}
          password={getUserInfo.password}
          Repassword={getUserInfo.Repassword}
          SubmitBtn={listOfItem}
          onChange={inputEvent}
          btnConten={toggleBtnSubmit}
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
