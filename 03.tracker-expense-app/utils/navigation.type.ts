import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  ManageExpense: undefined | { expenseId: string };
  ExpenseOverview: undefined;
  [key: string]: undefined | { [param: string]: string | number };
};

export type UseNavigationHookProp =
  NativeStackNavigationProp<RootStackParamList>;

export type NavigationParam = {
  navigation: {
    navigate: (param: keyof RootStackParamList) => void;
  };
};

export type RouteParams<RouteName extends keyof RootStackParamList> = React.FC<{
  navigation: NativeStackNavigationProp<RootStackParamList, RouteName>;
  route: RouteProp<RootStackParamList, RouteName>;
}>;
