import React from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString()
  );

  const filterChangeHandler = (selected_year) => {
    setFilteredYear(selected_year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // const filteredYearExpenses = props.items.filter((item)=>{
  // return item.date.getFullYear().toString === filteredYear
  // })

  // console.log(filteredYearExpenses);

  //   console.log(filteredYear);

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {filteredExpenses.length === 0 ? (
        <p style={{ color: "#fff" }}>No Data Found</p>
      ) : (
        filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense._id}
              name={expense.expenseName}
              amount={expense.expenseAmount}
              date={expense.date}
            />
          );
        })
      )}

      {}
      {/* <ExpenseItem name={props.expenses[0].expenseName} amount={props.expenses[0].expenseAmount} date={props.expenses[0].date} />
        <ExpenseItem name={props.expenses[1].expenseName} amount={props.expenses[1].expenseAmount} date={props.expenses[1].date} />
        <ExpenseItem name={props.expenses[2].expenseName} amount={props.expenses[2].expenseAmount} date={props.expenses[2].date} /> */}
    </div>
  );
};

export default Expenses;
