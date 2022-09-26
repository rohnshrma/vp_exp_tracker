import React, { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // console.log(props);
  // const [userInput, setuserInput] = useState({
  //     expenseName: "",
  //     expenseAmount: "",
  //     date: "",
  // });
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // var {name, value} = event.target;
    // setuserInput((prevValue) => {
    //     return {
    //         ...prevValue,
    //         [name]: value
    //     };
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // var {name, value} = event.target;
    // setuserInput((prevValue) => {
    //     return {
    //         ...prevValue,
    //         [name]: value
    //     };
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // var {name, value} = event.target;
    // setuserInput((prevValue) => {
    //     return {
    //         ...prevValue,
    //         [name]: value
    //     };
    // });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(userInput, "this is userInput")
    // props.pullFunc(userInput);

    const expenseData = {
      expenseName: enteredTitle,
      expenseAmount: enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData);

    props.onSaveExpenseData(expenseData);
    props.onStopAdding();
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  // props.pullFunc(handleData)

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            // name="expenseName"
            value={enteredTitle}
            id="title"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            // name="expenseAmount"
            onChange={amountChangeHandler}
            id="amount"
            value={enteredAmount}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            // name="date"
            onChange={dateChangeHandler}
            id="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onStopAdding}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
