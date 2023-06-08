import { View } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import styles from './styles';
import { DUMMY_EXPENSES } from '../../utils/constant';
import { Expense } from '../../context/expense.context';

type ExpensesOutputProps = {
  expensesPeriod: string;
  expenses: Expense[];
};

const ExpensesOutput = ({ expenses, expensesPeriod }: ExpensesOutputProps) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;
