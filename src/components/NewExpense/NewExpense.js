import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  function saveExpenseHandler(enteredExpenseData) {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
}

export default NewExpense;
