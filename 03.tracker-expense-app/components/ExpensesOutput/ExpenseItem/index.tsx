import { FlatList, Pressable, Text, View } from 'react-native';
import { ExpensesType } from '..';
import styles from './styles';

type ExpenseItemProps = ExpensesType;

const ExpenseItem = ({ description, amount, date }: ExpenseItemProps) => {
  return (
    <Pressable>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{String(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;
