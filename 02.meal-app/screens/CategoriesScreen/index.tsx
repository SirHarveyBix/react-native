import { FlatList } from 'react-native';
import { CATEGORIES } from '../../data/dummy-data';
import { CategoryGridTile } from '../../components/CategoryGridTile';
import Category from '../../models/category';

const renderCategoryItem = ({ item }: { item: Category }) => {
  return <CategoryGridTile title={item.title} color={item.color} />;
};

export const CategoriesScreen = () => {
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
