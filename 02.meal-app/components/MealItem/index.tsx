import { Text, View } from 'react-native';
import { styles } from './style';
import Meal from '../../models/meal';

export const MealItem = ({ title }: Partial<Meal>) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};
