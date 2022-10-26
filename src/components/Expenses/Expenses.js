import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const { expenses } = props;

  return (
    <div>
      <ExpensesFilter />
      <div className="expenses">
        {expenses.map((e) => (
          <ExpenseItem
            title={e.title}
            amount={e.amount}
            date={e.date}
            key={e.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Expenses;
