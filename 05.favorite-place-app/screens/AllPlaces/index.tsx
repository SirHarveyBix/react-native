import { useIsFocused } from '@react-navigation/native';
import PlacesList from '../../components/Places/PlacesList';
import { useEffect, useState } from 'react';
import { CompletePlace } from '../../models/place';
import { fetchPlaces } from '../../utils/utils';

const AllPlaces = () => {
  const [loadedPlaces, setLoadedPlaces] = useState<CompletePlace[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const loadPlaces = async () => {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    };

    if (isFocused) {
      loadPlaces();
    }
  }, [isFocused]);

  return <PlacesList places={loadedPlaces} />;
};

export default AllPlaces;
