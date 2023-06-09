import { View } from 'react-native';
import { RouteParams } from '../../utils/navigation.type';
import { useContext, useLayoutEffect, useState } from 'react';
import IconButton from '../../components/ui/IconButton';
import { GlobalStyles } from '../../utils/constant';
import styles from './styles';
import { Expense, ExpensesContext } from '../../context/expense.context';
import ExpenseForm from '../../components/ExpenseForm';
import {
  storeExpense,
  deleteExpense as axiosDeleteExpense,
  updateExpense as axiosUpdateExpense,
} from '../../utils/http';
import LoadingOverlay from '../../components/ui/LoadingOverlay';
import ErrorOverlay from '../../components/ui/ErrorOverlay';

const ManageExpense: RouteParams<'ManageExpense'> = ({ route, navigation }) => {
  const [isSubmitting, setIsSubmitting] = useState(true);
  const [error, setError] = useState('');

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

  const deleteExpenserHandler = async () => {
    setIsSubmitting(true);
    try {
      if (editedExpenseId) {
        deleteExpense(editedExpenseId);
        await axiosDeleteExpense(editedExpenseId);
      }
      navigation.goBack();
    } catch (error) {
      setError('Could not delete expense - please try again later!');
      setIsSubmitting(false);
    }
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = async (expenseData: Expense) => {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        updateExpense(editedExpenseId, expenseData);
        await axiosUpdateExpense(editedExpenseId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        addExpense({ ...expenseData, id: id });
      }
      navigation.goBack();
    } catch (error) {
      setError('Could not save data - please try again later!');
      setIsSubmitting(false);
    }
  };

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} />;
  }

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
