
import demoData from "../expenseData"
import Expenses from "./Expenses/Expenses"
import './App.css';
import { useState } from "react";
import NewExpense from "./NewExpense/NewExpense";
import Card from "./UI/Card"





function App() {

  const [expenses, setExpenses] = useState(demoData);

  const handleData = (expense) => {
    setExpenses((prevValue) => {
      return [expense, ...prevValue];
    });
    console.log(expense);
  };

  return (
    <div className="App">

      <Card>
        <NewExpense onAddExpense={handleData} />
        <Expenses items={expenses} />
      </Card>


    </div>
  );
}

export default App;
