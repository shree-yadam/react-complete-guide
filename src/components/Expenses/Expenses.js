import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

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
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filterYear={filterYear}
          onFilterYear={filterYearChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
