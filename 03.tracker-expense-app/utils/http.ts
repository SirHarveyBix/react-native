import axios from 'axios';
import { Expense } from '../context/expense.context';

const BACKEND_URL =
  'https://react-native-course-edc24-default-rtdb.europe-west1.firebasedatabase.app';

export const storeExpense = (expenseData: Expense) => {
  axios.post(`${BACKEND_URL}/expenses.json`, expenseData);
};

export const fetchExpenses = async (): Promise<Expense[]> => {
  const response = await axios.get(`${BACKEND_URL}/expenses.json`);
  const expenses = [];

  for (const key in response.data) {
    const expenseObject = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObject);
  }

  return expenses;
};
