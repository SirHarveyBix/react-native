import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Place } from '../models/place';

export type RootStackParamList = {
  AllPlaces: undefined | { place: Place };
  AddPlace: undefined | { pickedLat: number; pickedLng: number };
  Map: undefined;
};

export type UseNavigationHookProp =
  NativeStackNavigationProp<RootStackParamList>;

export type UseRouteHookProp = RouteProp<RootStackParamList>;

export type LatLng = {
  lat: number;
  lng: number;
};
