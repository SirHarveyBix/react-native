import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import PlaceForm from '../../components/Places/PlaceForm';
import { RootStackParamList } from '../../types/types';
import { Place } from '../../models/place';

type AddPlaceProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const AddPlace = ({ navigation }: AddPlaceProps) => {
  const createPlaceHandler = (place: Place) => {
    navigation.navigate('AllPlaces', { place });
  };

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;
