import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  ManageExpense: undefined;
  ExpenseOverview: undefined;
  [key: string]: undefined;
};

export type UseNavigationHookProp =
  NativeStackNavigationProp<RootStackParamList>;

export type NavigationParam = {
  navigation: {
    navigate: (param: keyof RootStackParamList) => void;
  };
};
