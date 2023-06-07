import { Text, View } from 'react-native';

type ExpensesType = {
  id: string;
  description: string;
  amount: number;
  date: Date;
};

type ExpensesSummaryProps = {
  expenses: ExpensesType[];
  periodName: string;
};

const ExpensesSummary = ({ expenses, periodName }: ExpensesSummaryProps) => {
  const expensesSum = expenses.reduce((sum: number, expense: ExpensesType) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;
