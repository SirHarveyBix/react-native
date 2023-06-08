import { Expense } from '../context/expense.context';

export const GlobalStyles = {
  colors: {
    primary50: '#e4d9fd',
    primary100: '#c6affc',
    primary200: '#a281f0',
    primary400: '#5721d4',
    primary500: '#3e04c3',
    primary700: '#2d0689',
    primary800: '#200364',
    accent500: '#f7bc0c',
    error50: '#fcc4e4',
    error500: '#9b095c',
    gray500: '#39324a',
    gray700: '#221c30',
  },
};

export const DUMMY_EXPENSES: Expense[] = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    description: 'A trouser',
    amount: 5.99,
    date: new Date('2021-07-14'),
  },
  {
    id: 'e3',
    description: 'bananas',
    amount: 2.59,
    date: new Date('2021-10-27'),
  },
  {
    id: 'e4',
    description: 'air BnB',
    amount: 179.99,
    date: new Date('2022-05-20'),
  },
  {
    id: 'e5',
    description: 'book',
    amount: 19.79,
    date: new Date('2022-02-14'),
  },
  {
    id: 'e6',
    description: 'another book',
    amount: 19.89,
    date: new Date('2023-06-07'),
  },
];
