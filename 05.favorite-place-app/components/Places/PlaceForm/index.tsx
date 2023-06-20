import { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import styles from './styles';
import ImagePicker from '../ImagePicker';
import LocationPicker from '../LocationPicker';

type PlaceFormProps = {};

const PlaceForm = ({}: PlaceFormProps) => {
  const [enteredTitle, setEnteredTitle] = useState('');

  const changeTitleHandler = (enteredText: string) => {
    setEnteredTitle(enteredText);
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
      <ImagePicker />
      <LocationPicker />
    </ScrollView>
  );
};

export default PlaceForm;
