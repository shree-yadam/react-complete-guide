import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

function NewExpense() {
  function saveExpenseHandler(enteredExpenseData) {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    console.log(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
}

export default NewExpense;