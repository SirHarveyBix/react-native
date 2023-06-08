import { View } from 'react-native';
import { RouteParams } from '../../utils/navigation.type';
import { useLayoutEffect } from 'react';
import IconButton from '../../components/ui/IconButton';
import { GlobalStyles } from '../../utils/constant';
import styles from './styles';
import Button from '../../components/ui/Button';

const ManageExpense: RouteParams<'ManageExpense'> = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [isEditing, navigation]);

  const deleteExpenserHandler = () => {
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={confirmHandler} style={styles.button}>
          {isEditing ? 'update' : 'Add'}
        </Button>
      </View>
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
