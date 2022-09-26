import React,{useState} from "react";

import "./NewExpense.css";
import ExpenseForm from "../NewExpense/ExpenseForm";
const NewExpense = (props) => {

const [isStartAdding , setisStartAdding] = useState(false)
  

const handleStartAdding = ()=>{
  setisStartAdding(true)
}

const handleStopAdding = ()=>{
setisStartAdding(false)
}

  const SaveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      _id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
       {isStartAdding && <ExpenseForm onStopAdding={handleStopAdding} onSaveExpenseData={SaveExpenseHandler} />}
        {!isStartAdding && <button onClick={handleStartAdding}>Add Expenses</button>}
    </div>
  );
};

export default NewExpense;
