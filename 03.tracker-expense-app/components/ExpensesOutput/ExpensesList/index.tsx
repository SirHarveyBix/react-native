import { FlatList, View } from 'react-native';
import { ExpensesType } from '..';
import ExpenseItem from '../ExpenseItem';

type ExpensesListProps = {
  expenses: ExpensesType[];
};

const renderExpenseItem = ({ item }: { item: ExpensesType }) => {
  return <ExpenseItem {...item} />;
};

const ExpensesList = ({ expenses }: ExpensesListProps) => {
  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ExpensesList;
