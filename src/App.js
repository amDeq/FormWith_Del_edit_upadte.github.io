import React, { useState } from "react";
import FormSection from "./components/FormSection";
import Header from "./header";
import List from "./components/List";

const App = () => {
  const [users, setUsers] = useState([]);
  // const [editUser, setEditUser] = useState({});
  // const [toggleBtn, setToggleBtn] = useState(true);
  // const [matchUserIdAndEdit, setMatchUserIdAndEdit] = useState(null);

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
    // console.log("it is editing", user);
    setEditUser(user);
    // setEditUser((usersFunc.editUser = editUser));
    // setToggleBtn((usersFunc.toggleBtn = true));
    // setMatchUserIdAndEdit((usersFunc.matchUserIdAndEdit = id));
    // console.log(editUser);
  };

  // const setEditUser = (usersFunc) => {
  //   setUserFunc(usersFunc);
  // };
  // const setToggleBtn = (usersFunc) => {
  //   setUserFunc(usersFunc);
  // };
  // const setMatchUserIdAndEdit = (usersFunc) => {
  //   setUserFunc(usersFunc);
  // };

  const addUser = (user) => {
    // if (usersFunc.matchUserIdAndEdit) {
    //   const userMatchdataEdit = users.filter((edit) => {
    //     if (edit.id === usersFunc.matchUserIdAndEdit) {
    //       edit.fullname = user.fullname;
    //       edit.userEmail = user.userEmail;
    //       edit.gender = user.gender;
    //       edit.education = user.education;
    //       edit.password = user.password;
    //       edit.repassword = user.repassword;
    //     }
    //     return user;
    //   });
    //   setUsers(userMatchdataEdit);
    // } else {
    setUsers([
      ...users,
      { ...user, id: user.id ? user.id : new Date().getTime().toString() },
    ]);
    // }
  };
  console.log(users);
  const saveEditedUser = (user) => {
    console.log("user", user);

    const newUser = users.map((user) => {
      if (user.id === editUser) {
        return { ...user, name: editUser };
      }
      return user;
    });

    setEditUser(newUser);
  };

  return (
    <>
      <Header />
      <section className="mainSection">
        <FormSection
          addUser={addUser}
          userToBeEdited={editUser}
          saveEditedUser={saveEditedUser}
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
