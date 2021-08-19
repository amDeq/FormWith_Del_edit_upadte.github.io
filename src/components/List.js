import React from "react";
const List = (props) => {
  return (
    <table className="olList">
      <tr className=" olListBox mobileView">
        <th>Fullname</th>
        <th>Email</th>
        <th>Gender</th>
        <th>User File</th>
        <th>Education level</th>
        <th>User Password</th>
        <th>Delete</th>
        <th>Edit</th>
      </tr>

      {props.items.map((item) => {
        // return console.log([item])
        return (
          <>
            <tr className="olListBox1" key={item.id}>
              <td>{item.name.fullname}</td>
              <td>{item.name.userEmail}</td>
              <td>{item.name.gender}</td>
              <td>{item.name.selectEdu}</td>
              <td>{item.name.password}</td>
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
