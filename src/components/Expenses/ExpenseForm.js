import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState();
  const [enteredAmount, setenteredAmount] = useState();
  const [enteredDate, setenteredDate] = useState();
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  const titleHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    setenteredTitle(event.target.value);
  };
  const amountHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    setenteredAmount(event.target.value);
  };
  const dateHandeler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    setenteredDate(event.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };
    props.saveDate(obj);
    setenteredTitle("");
    setenteredAmount("");
    setenteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="'new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleHandler} />
        </div>
        <div className="'new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={amountHandler} />
        </div>
        <div className="'new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateHandeler} />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default ExpenseForm;
