import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  function saveExpenseHandler(enteredExpenseData) {
    const expenseData = {
      title: enteredExpenseData.enteredTitle,
      amount: enteredExpenseData.enteredAmount,
      date: new Date(enteredExpenseData.enteredDate),
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    stopEditingHandler();
  }

  function startEditingHandler(e) {
    setIsEditing(true);
  }

  function stopEditingHandler(e) {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {isEditing && <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={stopEditingHandler}/>}
      {!isEditing && 
          <button type="button" onClick={startEditingHandler}>Add NewExpense</button>}
    </div>
  );
}

export default NewExpense;
