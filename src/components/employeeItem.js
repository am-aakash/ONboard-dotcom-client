import React from "react"

const EmployeeItem = (props) => {
  const { employee } = props;
  var letterStyle = {
    padding: 4,
    margin: 4,
    // backgroundColor: "#ffde00",
    // color: "#333",
    // display: "inline-block",
    // fontFamily: "monospace",
    // fontSize: 32,
    // textAlign: "center"
};
  return (
    
    <div style = {letterStyle}>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{employee.name}</h5>
          <p class="card-text"> {employee.role}</p>
        </div>
      </div>
    </div>
  )
}

export default EmployeeItem
