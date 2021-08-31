import React, { useState } from "react";
import FormSection from "./components/FormSection";
import Header from "./header";
import List from "./components/List";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState();

  const deleteUser = (userIndex) => {
    const deleteItems = users.filter((userList) => {
      return userIndex !== userList.id;
    });
    setUsers(deleteItems);
  };
  const editUserButton = (id) => {
    const user = users.find((userList) => {
      return userList.id === id;
    });
    setEditUser(user);
  };
  const addUser = (user) => {
    setUsers([
      ...users,
      { ...user, id: user.id ? user.id : new Date().getTime().toString() },
    ]);
  };
  const saveEditedUser = (editUser) => {
    const newUser = users.map((user) =>
      user.id === editUser.id ? editUser : user
    );

    setUsers(newUser);
  };

  return (
    <>
      <Header />
      <section className="mainSection">
        <FormSection
          addUser={addUser}
          userToBeEdited={editUser}
          saveEditedUser={saveEditedUser}
          editUser={editUser}
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
