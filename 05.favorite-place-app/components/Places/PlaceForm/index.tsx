import { useCallback, useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import styles from './styles';
import ImagePicker from '../ImagePicker';
import LocationPicker from '../LocationPicker';
import Button from '../../ui/Button';
import { Place } from '../../../models/place';

type PlaceFormProps = {};

const PlaceForm = ({}: PlaceFormProps) => {
  const [enteredTitle, setEnteredTitle] = useState<string>();
  const [selectImage, setSelectImage] = useState<string>();
  const [pickedLocation, setPickedLocation] = useState<Partial<Place>>();

  const changeTitleHandler = (enteredText: string) => {
    setEnteredTitle(enteredText);
  };

  const imageTakenHandler = (imageUri: string) => {
    setSelectImage(imageUri);
  };

  const pickLocationHandler = useCallback((location: Partial<Place>) => {
    setPickedLocation(location);
  }, []);

  const savePlaceHandler = () => {};

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
