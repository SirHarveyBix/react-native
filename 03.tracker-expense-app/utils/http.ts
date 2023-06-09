import axios from 'axios';
import { Expense } from '../context/expense.context';

export const storeExpense = (expenseData: Expense) => {
  axios.post(
    'https://react-native-course-edc24-default-rtdb.europe-west1.firebasedatabase.app/expenses.json',
    expenseData
  );
};
