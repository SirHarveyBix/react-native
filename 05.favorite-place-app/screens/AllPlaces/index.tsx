import { RouteProp, useIsFocused } from '@react-navigation/native';
import PlacesList from '../../components/Places/PlacesList';
import { RootStackParamList } from '../../types/types';
import { useEffect, useState } from 'react';
import { Place } from '../../models/place';

type AllPlacesProps = {
  route: RouteProp<RootStackParamList, 'AllPlaces'>;
};

const AllPlaces = ({ route }: AllPlacesProps) => {
  const [loadedPlaces, setLoadedPlaces] = useState<Place[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedPlaces((currentPLaces) => [
        ...currentPLaces,
        route.params!.place,
      ]);
    }
  }, [isFocused, route]);

  return <PlacesList places={loadedPlaces} />;
};

export default AllPlaces;
