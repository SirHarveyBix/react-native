import { View } from 'react-native';
import { styles } from './styles';
import Meal from '../../models/meal';
import { MealItem } from '../MealItem';
import { FlatList } from 'react-native-gesture-handler';

export const MealList = ({ items }: { items: Meal[] }) => {
  const renderMealItem = ({ item }: { item: Meal }) => {
    return <MealItem {...item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
