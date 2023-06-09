import { useContext, useEffect } from 'react';
import ExpensesOutput from '../../components/ExpensesOutput';
import { ExpensesContext } from '../../context/expense.context';
import { getDateMinusDays } from '../../utils/utils';
import { fetchExpenses } from '../../utils/http';

const RecentExpenses = () => {
  const { setExpenses, expenses } = useContext(ExpensesContext);

  useEffect(() => {
    const getExpenses = async () => {
      const expenses = await fetchExpenses();
      setExpenses(expenses);
    };
    getExpenses();
  }, []);

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses Registered for last 7 days"
    />
  );
};

export default RecentExpenses;
