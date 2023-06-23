import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import PlaceForm from '../../components/Places/PlaceForm';
import { RootStackParamList } from '../../types/types';
import { Place } from '../../models/place';
import { insertPlace } from '../../utils/utils';

type AddPlaceProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const AddPlace = ({ navigation }: AddPlaceProps) => {
  const createPlaceHandler = async (place: Place) => {
    await insertPlace(place);
    navigation.navigate('AllPlaces');
  };

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;
