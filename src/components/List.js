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
        <th>Edit</th>
      </tr>

      {props.items.map((item) => {
        return (
          <>
            <tr className="olListBox1" key={item.id}>
              <td>{item.fullname}</td>
              <td>{item.userEmail}</td>
              <td>{item.gender}</td>
              <td>{item.education}</td>
              <td>{item.password}</td>
              <button
                className="deletbtn"
                onClick={() => props.deleteItemFun(item.id)}
              >
                Delete user
              </button>
              <button
                className="edittbtn"
                onClick={() => props.editItem(item.id)}
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
