import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
  return props.items.map((item) => (
    <Card classname="expenses">
      <ExpenseItem
        title={item.title}
        amount={item.amount}
        date={item.date}
        location={item.location}
      />
    </Card>
  ));
}
export default Expenses;
