import React from "react";
// import Container from "react-bootstrap/Container";


import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // console.log(props, "this is exprow component")

  return (

    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.name}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
