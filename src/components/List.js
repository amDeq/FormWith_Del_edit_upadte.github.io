import React from "react";
const List = (props) => {
  return (
    <table className="olList">
      <tr className=" olListBox mobileView">
        <th>Fullname</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Education level</th>
        <th>User Password</th>
        <th>Delete</th>
        <th>Edit</th>q
      </tr>

      {props.users.map((user) => {
        return (
          <>
            <tr className="olListBox1" key={user.id}>
              <td>{user.fullname}</td>
              <td>{user.userEmail}</td>
              <td>{user.gender}</td>
              <td>{user.education}</td>
              <td>{user.password}</td>
              <button
                className="deletbtn"
                onClick={() => props.deleteUser(user.id)}
              >
                Delete user
              </button>
              <button
                className="edittbtn"
                onClick={() => props.editUserButton(user.id)}
              >
                Edit user
              </button>
            </tr>
          </>
        );
      })}
    </table>
  );
};
export default List;
