import { View } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    description: 'A trouser',
    amount: 5.99,
    date: new Date('2021-07-14'),
  },
  {
    id: 'e3',
    description: 'bananas',
    amount: 2.59,
    date: new Date('2021-10-27'),
  },
  {
    id: 'e4',
    description: 'air BnB',
    amount: 179.99,
    date: new Date('2022-05-20'),
  },
  {
    id: 'e4',
    description: 'book',
    amount: 19.79,
    date: new Date('2022-02-14'),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }: any) => {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList items={expenses} />
    </View>
  );
};

export default ExpensesOutput;
