import { FlatList } from 'react-native';
import { CATEGORIES } from '../../data/dummy-data';
import { CategoryGridTile } from '../../components/CategoryGridTile';
import Category from '../../models/category';
import { useNavigation } from '@react-navigation/native';

export const CategoriesScreen = () => {
  const navigation = useNavigation();

  const renderCategoryItem = ({ item }: { item: Category }) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview');
    };

    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </>
  );
};
