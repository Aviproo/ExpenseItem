import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses = (props) => {
  return props.items.map((item) => (
    <Card key={item.id} classname="expenses">
      <ExpenseItem
        title={item.title}
        amount={item.amount}
        date={item.date}
        location={item.location}
      />
    </Card>
  ));
};
export default Expenses;
