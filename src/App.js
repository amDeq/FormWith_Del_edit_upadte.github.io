import React, { useState } from "react";
import FormSection from "./components/FormSection";
import Header from "./header";
import List from "./components/List";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState({});
  const [toggleBtn, setToggleBtn] = useState(true);
  const [matchUserIdAndEdit, setMatchUserIdAndEdit] = useState(null);
  const deleteUser = (userIndex) => {
    const deleteItems = users.filter((userList) => {
      return userIndex !== userList.id;
    });
    setUsers(deleteItems);
  };
  const editUserButton = (id) => {
    const editUserList = users.find((userList) => {
      return userList.id === id;
    });
    console.log("it is editing", editUserList);

    setEditUser(editUserList);
    setToggleBtn(false);
    setMatchUserIdAndEdit(id);
    console.log(editUserList);
  };

  const addUser = (user) => {
    if (matchUserIdAndEdit) {
      const userMatchdataEdit = users.filter((edit) => {
        if (edit.id === matchUserIdAndEdit) {
          edit.fullname = user.fullname;
          edit.userEmail = user.userEmail;
          edit.gender = user.gender;
          edit.education = user.education;
          edit.password = user.password;
          edit.repassword = user.repassword;
        }
        return user;
      });
      setUsers(userMatchdataEdit);
    } else {
      setUsers([
        ...users,
        { ...user, id: user.id ? user.id : new Date().getTime().toString() },
      ]);
    }
  };
  console.log(users);

  return (
    <>
      <Header />
      <section className="mainSection">
        <FormSection
          addUser={addUser}
          editUserButton={editUserButton}
          editUser={editUser}
          toggleBtn={toggleBtn}
          users={users}
          MatchUserIdAndEdit={matchUserIdAndEdit}
        />
        <List
          users={users}
          deleteUser={deleteUser}
          editUserButton={editUserButton}
        />
      </section>
    </>
  );
};
export default App;
