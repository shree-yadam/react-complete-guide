import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {

  const [filterYear, setFilterYear] = useState('2022');
  const { expenses } = props;

  function filterYearChangeHandler(year) {
    setFilterYear(year);
    console.log(`Setting year in Expenses ${year}`);
  }

  return (
    <div>
      <ExpensesFilter filterYear={filterYear} onFilterYear={filterYearChangeHandler}/>
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
