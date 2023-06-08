import { Text } from 'react-native';
import { RouteParams } from '../../utils/navigation.type';
import { useLayoutEffect } from 'react';

const ManageExpense: RouteParams<'ManageExpense'> = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [isEditing, navigation]);

  return <Text>ManageExpense Screen</Text>;
};

export default ManageExpense;
