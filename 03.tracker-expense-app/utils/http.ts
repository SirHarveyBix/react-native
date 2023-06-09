import axios from 'axios';
import { Expense } from '../context/expense.context';

const BACKEND_URL =
  'https://react-native-course-edc24-default-rtdb.europe-west1.firebasedatabase.app';

export const storeExpense = async (expenseData: Expense) => {
  const response = await axios.post(
    `${BACKEND_URL}/expenses.json`,
    expenseData
  );
  const id = response.data.name;
  return id;
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

export const updateExpense = (id: string, expenseData: Expense) => {
  return axios.put(`${BACKEND_URL}/expenses/${id}.json`, expenseData);
};

export const deleteExpense = async (id: string) => {
  axios.delete(`${BACKEND_URL}/expenses/${id}.json`);
};
