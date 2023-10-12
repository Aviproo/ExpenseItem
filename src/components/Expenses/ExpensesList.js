import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  let expenseContent;
  if (props.items.length == 1) {
    expenseContent = <p>"Only single Expense here. Please add more..."</p>;
  }
  if (props.items.length === 0) {
    return <h4 className="expenses-List__fallback">No items present</h4>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((item) => (
        <div key={item.id} className="expenses">
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            location={item.location}
          />
        </div>
      ))}
    </ul>
  );
};
export default ExpensesList;
