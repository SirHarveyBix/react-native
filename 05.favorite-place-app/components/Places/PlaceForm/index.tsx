import { useCallback, useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import styles from './styles';
import ImagePicker from '../ImagePicker';
import LocationPicker from '../LocationPicker';
import Button from '../../ui/Button';
import { CompleteLocationI, Place } from '../../../models/place';

type PlaceFormProps = {
  onCreatePlace: (placeData: Place) => void;
};

const PlaceForm = ({ onCreatePlace }: PlaceFormProps) => {
  const [enteredTitle, setEnteredTitle] = useState<string>();
  const [selectImage, setSelectImage] = useState<string>();
  const [pickedLocation, setPickedLocation] = useState<CompleteLocationI>();

  const changeTitleHandler = (enteredText: string) => {
    setEnteredTitle(enteredText);
  };

  const imageTakenHandler = (imageUri: string) => {
    setSelectImage(imageUri);
  };

  const pickLocationHandler = useCallback((location: CompleteLocationI) => {
    setPickedLocation(location);
  }, []);

  const savePlaceHandler = () => {
    if (pickedLocation && enteredTitle && selectImage) {
      const placeData = new Place(enteredTitle, selectImage, pickedLocation);
      onCreatePlace(placeData);
    }
  };

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>TITLE </Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker onTakeImage={imageTakenHandler} />
      <LocationPicker onTakeLocation={pickLocationHandler} />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
};

export default PlaceForm;
