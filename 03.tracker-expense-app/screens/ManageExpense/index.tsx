import { View } from 'react-native';
import { RouteParams } from '../../utils/navigation.type';
import { useContext, useLayoutEffect } from 'react';
import IconButton from '../../components/ui/IconButton';
import { GlobalStyles } from '../../utils/constant';
import styles from './styles';
import { ExpensesContext } from '../../context/expense.context';
import ExpenseForm from '../../components/ExpenseForm';

const ManageExpense: RouteParams<'ManageExpense'> = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const { addExpense, deleteExpense, updateExpense } =
    useContext(ExpensesContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [isEditing, navigation]);

  const deleteExpenserHandler = () => {
    if (editedExpenseId) {
      deleteExpense(editedExpenseId);
    }
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    if (isEditing && editedExpenseId) {
      updateExpense(editedExpenseId, {
        description: 'test',
        amount: 12,
        date: new Date('2023-06-5'),
      });
    } else {
      addExpense({
        id: '2',
        description: 'test',
        amount: 12,
        date: new Date('2023-06-5'),
      });
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        submitButtonLabel={isEditing ? 'update' : 'Add'}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenserHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;
