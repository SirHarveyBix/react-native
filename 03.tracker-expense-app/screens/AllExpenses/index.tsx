import ExpensesOutput from '../../components/ExpensesOutput';
import { useContext } from 'react';
import { ExpensesContext } from '../../context/expense.context';

const AllExpenses = () => {
  const expensesContext = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={expensesContext.expenses}
      expensesPeriod="Total"
      fallbackText="No register expenses found"
    />
  );
};

export default AllExpenses;
