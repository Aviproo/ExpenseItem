import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() == filteredYear;
  });
  return (
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filterExpenses.map((item) => (
        <Card key={item.id} classname="expenses">
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            location={item.location}
          />
        </Card>
      ))}
    </div>
  );
};
export default Expenses;
