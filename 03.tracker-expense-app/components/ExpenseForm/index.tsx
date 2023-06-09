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
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValue ? String(defaultValue.amount) : '',
      isValid: !!defaultValue,
    },
    date: {
      value: defaultValue ? getFormatedDate(defaultValue.date) : '',
      isValid: !!defaultValue,
    },
    description: {
      value: defaultValue ? defaultValue.description : '',
      isValid: !!defaultValue,
    },
  });

  const inputChangedHandler = (
    inputIdentifier: string,
    enteredValue: string
  ) => {
    setInputs((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  };

  const submitHandmer = () => {
    const expenseData = {
      amount: Number(inputs.amount.value),
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((currentInput) => {
        return {
          amount: { value: currentInput.amount.value, isValid: amountIsValid },
          date: { value: currentInput.date.value, isValid: dateIsValid },
          description: {
            value: currentInput.description.value,
            isValid: descriptionIsValid,
          },
        };
      });

      return;
    }

    onSubmit(expenseData);
  };

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangedHandler.bind(this, 'amount'),
            value: inputs.amount.value,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          invalid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            value: inputs.date.value,
          }}
        />
      </View>
      <Input
        label="Description"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangedHandler.bind(this, 'description'),
          value: inputs.description.value,
        }}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid input, Please check input values
        </Text>
      )}
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
