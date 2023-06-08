import { Pressable, Text, View } from 'react-native';
import { ExpensesType } from '..';
import styles from './styles';
import { getFormatedDate } from '../../../utils/utils';
import { useNavigation } from '@react-navigation/native';
import { UseNavigationHookProp } from '../../../utils/navigation.type';

type ExpenseItemProps = ExpensesType;

const ExpenseItem = ({ id, description, amount, date }: ExpenseItemProps) => {
  const navigation = useNavigation<UseNavigationHookProp>();
  const expensePressHandler = () => {
    navigation.navigate('ManageExpense', { expenseId: id });
  };

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormatedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;
