import { Text, View } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import styles from './styles';
import { Expense } from '../../context/expense.context';

type ExpensesOutputProps = {
  expensesPeriod: string;
  expenses: Expense[];
  fallbackText: string;
};

const ExpensesOutput = ({
  expenses,
  expensesPeriod,
  fallbackText,
}: ExpensesOutputProps) => {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
};

export default ExpensesOutput;
