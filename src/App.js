import React, { useState } from "react";
import FormSection from "./components/FormSection";
import Header from "./header";
import List from "./components/List";
const App = () => {
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
  };
  const addItem = (item) => {
    console.log("updated items", item);
    // return;
    //const resultData = items.filter((data) => data.id === editGetId);
    // setItems([
    //   ...items,
    //   { ...item, id: item.id ? item.id : new Date().getTime().toString() },
    // ]);

    // setItems((prevState) => {
    //   return [
    //     ...prevState,
    //     { ...item, id: item.id ? item.id : new Date().getTime().toString() },
    //   ];
    // });

    if (!editGetId) {
      setItems([...items, { ...item, id: new Date().getTime().toString() }]);
      //setItems(items);
    } else {
      setItems([
        {
          id: editGetId,
          fullname: item.fullname,
          userEmail: item.userEmail,
          gender: item.gender,
          education: item.education,
          password: item.password,
          repassword: item.repassword,
        },
      ]);
      console.log(item);
    }

    // console.log(item);
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
          // editGetId={editGetId}
        />
        <List items={items} deleteItemFun={deleteItemFun} editItem={editItem} />
      </section>
    </>
  );
};
export default App;
