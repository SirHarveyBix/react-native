import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type UserInputs = {
  email: string;
  confirmEmail?: string;
  password: string;
  confirmPassword?: string;
};

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Welcome: undefined;
};

export type UseNavigationHookProp =
  NativeStackNavigationProp<RootStackParamList>;
