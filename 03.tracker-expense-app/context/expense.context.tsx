import React, { ReactNode, createContext, useReducer } from 'react';

export type Expense = {
  id?: string;
  description: string;
  amount: number;
  date: Date;
};

type ContextState = {
  expenses: Expense[];
  addExpense: ({ description, amount, date }: Expense) => void;
  setExpenses: (expenses: Expense[]) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (id: string, { description, amount, date }: Expense) => void;
};

type Action =
  | { type: 'ADD'; payload: Expense }
  | { type: 'SET'; payload: Expense[] }
  | { type: 'UPDATE'; payload: { id: string; data: Expense } }
  | { type: 'DELETE'; payload: { id: string } };

export const ExpensesContext = createContext<ContextState>({
  expenses: [],
  addExpense: ({ description, amount, date }: Expense) => {},
  setExpenses: (expenses: Expense[]) => {},
  deleteExpense: (id: string) => {},
  updateExpense: (id: string, { description, amount, date }: Expense) => {},
});

const expensesReducer: React.Reducer<Expense[], Action> = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [action.payload, ...state];
    case 'SET':
      const inverted = action.payload.reverse();
      return inverted;
    case 'UPDATE':
      const { data } = action.payload;
      const updatablExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatablExpenseIndex];
      const updatedItem = { ...updatableExpense, ...data };
      const updatedExpense = [...state];
      updatedExpense[updatablExpenseIndex] = updatedItem;

      return updatedExpense;
    // return state.map((expense) =>
    //   expense.id === action.payload.id ? { ...expense, ...data } : expense
    // );
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload.id);

    default:
      return state;
  }
};

type ExpensesContextProviderProps = {
  children: ReactNode;
};

export const ExpensesContextProvider = ({
  children,
}: ExpensesContextProviderProps) => {
  const [expensesState, dispatch] = useReducer<
    React.Reducer<Expense[], Action>
  >(expensesReducer, []);

  const addExpense = (expenseData: Expense) => {
    dispatch({ type: 'ADD', payload: expenseData });
  };

  const setExpenses = (expenses: Expense[]) => {
    dispatch({ type: 'SET', payload: expenses });
  };

  const deleteExpense = (id: string) => {
    dispatch({ type: 'DELETE', payload: { id } });
  };

  const updateExpense = (id: string, expenseData: Expense) => {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  };

  return (
    <ExpensesContext.Provider
      value={{
        expenses: expensesState,
        addExpense,
        setExpenses,
        deleteExpense,
        updateExpense,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};
