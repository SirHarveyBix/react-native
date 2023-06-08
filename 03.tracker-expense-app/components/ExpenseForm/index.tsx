import { View } from 'react-native';
import styles from './styles';
import Input from './Input';

type ExpenseFormProps = {};

const ExpenseForm = ({}: ExpenseFormProps) => {
  const amountChange = () => {};

  return (
    <View style={styles.container}>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: amountChange,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: 'DD/MM/YYYY',
          maxLength: 10,
          onChangeText: () => console.log('ok'),
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
        }}
      />
    </View>
  );
};

export default ExpenseForm;
