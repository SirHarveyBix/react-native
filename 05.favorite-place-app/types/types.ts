import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  AllPlaces: undefined;
  AddPlace: undefined;
};

export type UseNavigationHookProp =
  NativeStackNavigationProp<RootStackParamList>;
