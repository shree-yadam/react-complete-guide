import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((e) => (
        <ExpenseItem
          title={e.title}
          amount={(Math.round(e.amount * 100) / 100).toFixed(2)}
          date={e.date}
          key={e.id}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
