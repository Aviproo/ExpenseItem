import React, { useState } from "react";
const Expensedetails = (props) => {
  let [amount, setamount] = useState(props.amount);
  let [title, setTitle] = useState(props.title);
  let increseExpense = () => {
    setamount(amount + 100);
  };
  let changeTitle = () => {
    setTitle("updated title");
  };
  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <button onClick={changeTitle}>Change Title</button>
      <div className="expense-item__price">${amount}</div>
      <div className="expense-item__price">{props.location}</div>
      <button onClick={increseExpense}>Increse Expense</button>
    </div>
  );
};
export default Expensedetails;
