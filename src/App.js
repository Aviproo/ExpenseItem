import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expense = [
    {
      key: 1,
      title: "car Insurance",
      amount: 200,
      date: new Date(2023, 9, 7),
      LocationOfExpenditure: "India",
    },
    {
      key: 2,
      title: "Application",
      amount: 800,
      date: new Date(2023, 9, 9),
      LocationOfExpenditure: "Africa",
    },
    {
      key: 3,
      title: "Medicine",
      amount: 100,
      date: new Date(2023, 9, 8),
      LocationOfExpenditure: "Europe",
    },
    {
      key: 4,
      title: "Medicine",
      amount: 100,
      date: new Date(2023, 9, 8),
      LocationOfExpenditure: "Austrailia",
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      {expense.map((item) => (
        <ExpenseItem
          key={item.key}
          title={item.title}
          amount={item.amount}
          date={item.date.toDateString()}
          LocationOfExpenditure={item.LocationOfExpenditure}
        ></ExpenseItem>
      ))}
    </div>
  );
}

export default App;
