import { Text, View } from 'react-native';
import styles from './styles';
import Input from './Input';
import { useState } from 'react';
import Button from '../ui/Button';
import { Expense } from '../../context/expense.context';
import { getFormatedDate } from '../../utils/utils';

type ExpenseFormProps = {
  onCancel: () => void;
  onSubmit: (expenseData: Expense) => void;
  submitButtonLabel: string;
  defaultValue: Expense | undefined;
};

const ExpenseForm = ({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultValue,
}: ExpenseFormProps) => {
  const [inputValues, setInputValues] = useState({
    amount: defaultValue ? String(defaultValue.amount) : '',
    date: defaultValue ? getFormatedDate(defaultValue.date) : '',
    description: defaultValue ? defaultValue.description : '',
  });

  const inputChangedHandler = (
    inputIdentifier: string,
    enteredValue: string
  ) => {
    setInputValues((currentInputValues) => {
      return { ...currentInputValues, [inputIdentifier]: enteredValue };
    });
  };

  const submitHandmer = () => {
    const expenseData = {
      amount: Number(inputValues.amount),
      date: new Date(inputValues.date),
      description: inputValues.description,
    };
    onSubmit(expenseData);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangedHandler.bind(this, 'amount'),
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: 'DD/MM/YYYY',
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangedHandler.bind(this, 'description'),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttons}>
        <Button mode="flat" onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={submitHandmer} style={styles.button}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;
