import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2022");
  const { expenses } = props;
  const filteredExpenses = expenses.filter(
    (e) => e.date.getFullYear().toString() === filterYear
  );

  function filterYearChangeHandler(year) {
    setFilterYear(year);
  }

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          filterYear={filterYear}
          onFilterYear={filterYearChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
