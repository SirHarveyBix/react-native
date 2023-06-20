import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  AllPlaces: undefined;
  AddPlace: undefined | { pickedLat: number; pickedLng: number };
  Map: undefined;
};

export type UseNavigationHookProp =
  NativeStackNavigationProp<RootStackParamList>;
export type UseRouteHookProp = RouteProp<RootStackParamList>;
