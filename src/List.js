import React from "react";

const Table=(props)=>{
    return(
        
    <table id="customers">
        <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
        </tr>
        <tr>
            <td>{[props.item.fullname]}</td>
        
        </tr>
    </table>   
    );
}
export default Table;