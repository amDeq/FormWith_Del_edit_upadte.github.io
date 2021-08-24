import React, { useState } from "react";
import FormSection from "./components/FormSection";
import Header from "./header";
import List from "./components/List";
const App = (props) => {
  const [items, setItems] = useState([]);
  const [editValue, setEditValue] = useState({});
  const [toggleBtn, setToggleBtn] = useState(true);
  const [editGetId, setEditGetId] = useState(null);
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
    console.log("it is editing", editListItem);

    setEditValue(editListItem);
    setToggleBtn(false);
    setEditGetId(id);
    console.log(editListItem);
  };
  const addItem = (item) => {
    if (editGetId) {
      const data = items.filter((info) => {
        if (info.id === editGetId) {
          info.fullname = item.fullname;
          info.userEmail = item.userEmail;
          info.gender = item.gender;
          info.education = item.education;
          info.password = item.password;
          info.repassword = item.repassword;
        }
        return items;
      });
      setItems(data);
      // console.log("data", data);
    } else {
      setItems([
        ...items,
        { ...item, id: item.id ? item.id : new Date().getTime().toString() },
      ]);
    }
  };
  console.log(items);
  return (
    <>
      <Header />
      <section className="mainSection">
        <FormSection
          addItem={addItem}
          editItem={editItem}
          editValue={editValue}
          toggleBtn={toggleBtn}
          items={items}
          editGetId={editGetId}
        />
        <List items={items} deleteItemFun={deleteItemFun} editItem={editItem} />
      </section>
    </>
  );
};
export default App;
