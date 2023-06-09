import { View } from 'react-native';
import { RouteParams } from '../../utils/navigation.type';
import { useContext, useLayoutEffect } from 'react';
import IconButton from '../../components/ui/IconButton';
import { GlobalStyles } from '../../utils/constant';
import styles from './styles';
import { Expense, ExpensesContext } from '../../context/expense.context';
import ExpenseForm from '../../components/ExpenseForm';
import { storeExpense } from '../../utils/http';

const ManageExpense: RouteParams<'ManageExpense'> = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const { addExpense, deleteExpense, updateExpense, expenses } =
    useContext(ExpensesContext);

  const selectedExpense = expenses.find(
    (expense) => expense.id === editedExpenseId
  );

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

  const confirmHandler = async (expenseData: Expense) => {
    if (isEditing && editedExpenseId) {
      updateExpense(editedExpenseId, expenseData);
    } else {
      const id = await storeExpense(expenseData);
      addExpense({ ...expenseData, id: id });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        submitButtonLabel={isEditing ? 'update' : 'Add'}
        defaultValue={selectedExpense}
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
