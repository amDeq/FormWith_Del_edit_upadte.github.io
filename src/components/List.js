import React from "react";

const List = (props) => {
  console.log(props);
  return (
    <table className="olList">
      <tr className=" olListBox">
        <th>Fullname</th>
        <th>Email</th>
        <th>Gender</th>
        <th>User File</th>
        <th>Education level</th>
        <th>User Password</th>
        <th>Delete</th>
        <th>Edit</th>
      </tr>

      {props.itemsList.map((item) => {
        // return console.log([item])
        return (
          <>
            <tr className="olListBox1" key={item.id}>
              <td>{item.name.fullname}</td>
              <td>{item.name.userEmail}</td>
              <td>{item.name.gender}</td>
              <td>{item.name.takeFile}</td>
              <td>{item.name.selectEdu}</td>
              <td>{item.name.password}</td>
              <button
                className="deletbtn"
                onClick={() => props.onChangeList(item.id)}
              >
                Delete user
              </button>
              <button
                className="edittbtn"
                onClick={() => props.onChangeEdit(item.id)}
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
