
import demoData from "./expenseData.js"
import Expenses from "./components/Expenses"
import './App.css';
import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense.js";
import Card from "./components/Card"





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
