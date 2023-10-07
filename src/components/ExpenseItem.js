import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={props.amount}
        location={props.location}
        title={props.title}
      />
    </div>
  );
}

export default ExpenseItem;
