import { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setenteredTitle] = useState();
  const [enteredAmount, setenteredAmount] = useState();
  const [enteredDate, setenteredDate] = useState();
  const titleHandler = (e) => {
    setenteredTitle(e.target.value);
    console.log(enteredTitle);
  };
  const amountHandler = (e) => {
    setenteredAmount(e.target.value);
    console.log(enteredAmount);
  };
  const dateHandeler = (e) => {
    setenteredDate(e.target.value);
    console.log(enteredDate);
  };
  return (
    <div>
      <div>
        Expense title:
        <input onChange={titleHandler} value={enteredTitle} />
        Expense Amount:
        <input onChange={amountHandler} value={enteredAmount} />
        Date:
        <input onChange={dateHandeler} value={enteredDate} />
      </div>
      <button>Add Expense</button>
    </div>
  );
};
export default ExpenseForm;
