import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  // const [enteredTitle, setenteredTitle] = useState();
  // const [enteredAmount, setenteredAmount] = useState();
  // const [enteredDate, setenteredDate] = useState();
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
  };
  const amountHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };
  const dateHandeler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: userInput.enteredDate,
    };
    console.log(obj);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="'new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} />
        </div>
        <div className="'new-expense__control">
          <label>Amount</label>
          <input type="text" onChange={amountHandler} />
        </div>
        <div className="'new-expense__control">
          <label>Date</label>
          <input type="text" onChange={dateHandeler} />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default ExpenseForm;
