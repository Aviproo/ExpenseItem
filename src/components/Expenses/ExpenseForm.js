import { useState } from "react";

const ExpenseForm = () => {
  const [expenseTitle, setExpenseTitle] = useState();
  const onChangehandeler = (e) => {
    setExpenseTitle(e.target.value);
    console.log(expenseTitle);
  };
  return (
    <div>
      <div>
        Expense title:
        <input onChange={onChangehandeler} value={expenseTitle} />
        Expense Amount:
        <input />
        Date:
        <input />
      </div>
      <button>Add Expense</button>
    </div>
  );
};
export default ExpenseForm;
