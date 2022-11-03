import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2022");
  const { expenses } = props;

  function filterYearChangeHandler(year) {
    setFilterYear(year);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filterYear={filterYear}
          onFilterYear={filterYearChangeHandler}
        />
        {expenses
          .filter((e) => e.date.getFullYear().toString() === filterYear)
          .map((e) => (
            <ExpenseItem
              title={e.title}
              amount={(Math.round(e.amount * 100) / 100).toFixed(2)}
              date={e.date}
              key={e.id}
            />
          ))}
      </Card>
    </div>
  );
}

export default Expenses;
