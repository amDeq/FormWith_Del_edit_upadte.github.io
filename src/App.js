import React, { useState } from "react";
import FormSection from "./components/FormSection";
import Header from "./header";
import List from "./components/List";
const App = () => {
  const [items, setItems] = useState([]);
  const [editValue, setEditValue] = useState({});
  const [toggleBtnSubmit, setToggleBtnSubmit] = useState(true);

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
    setToggleBtnSubmit(false);
  };
  const addItem = (item) => {
    setItems([...items, { ...item, id: new Date().toTimeString().toString() }]);
    console.log(item);
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
          toggleBtnSubmit={toggleBtnSubmit}
        />
        <List items={items} deleteItemFun={deleteItemFun} editItem={editItem} />
      </section>
    </>
  );
};
export default App;
