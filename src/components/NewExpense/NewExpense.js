import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  function saveExpenseHandler(enteredExpenseData) {
    const expenseData = {
      title: enteredExpenseData.enteredTitle,
      amount: enteredExpenseData.enteredAmount,
      date: new Date(enteredExpenseData.enteredDate),
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
}

export default NewExpense;
