import React from "react";

import "./NewExpense.css";
import ExpenseForm from "../NewExpense/ExpenseForm";
const NewExpense = (props) => {
  const SaveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      _id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={SaveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
