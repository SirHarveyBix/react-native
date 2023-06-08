import { Text, View } from 'react-native';
import { ExpensesType } from '..';
import styles from './styles';

type ExpensesSummaryProps = {
  expenses: ExpensesType[];
  periodName: string;
};

const ExpensesSummary = ({ expenses, periodName }: ExpensesSummaryProps) => {
  const expensesSum = expenses.reduce((sum: number, expense: ExpensesType) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;
