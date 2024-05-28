import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {categories} from '../../constants';
import {useState} from 'react';
import COLOR from '../../constants/COLORS';

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  //const handleOnFocus =
  return (
    <View>
      <Text
        style={{
          color: '#000',
          fontWeight: 'bold',
          fontSize: 16,
          marginHorizontal: 15,
          marginVertical: 15,
        }}>
        Danh mục
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {categories.map((category, index) => {
          let isActive = category.id == activeCategory;
          return (
            <View style={styles.itemCategory}>
              <TouchableOpacity onPress={() => setActiveCategory(category.id)}>
                <Image
                  style={{width: 45, height: 45, alignSelf: 'center'}}
                  source={category.image}
                />
                <Text
                  style={{
                    color: '#000',
                    justifyContent: 'center',
                    textAlign: 'center',
                    marginTop: 10,
                  }}>
                  {category.name}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  itemCategory: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 15,
  },
});
