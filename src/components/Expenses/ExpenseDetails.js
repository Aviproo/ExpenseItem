import React from "react";
const Expensedetails = (props) => {
  const deleteExpense = () => {
    console.log("clicked");
  };
  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
      <div className="expense-item__price">{props.location}</div>
      <button onClick={deleteExpense}>Delete Expense</button>
    </div>
  );
};
export default Expensedetails;
