import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Categories from '../components/Categories';
import {drink, drinkFeatured, featured, hotPodFeatured} from '../../constants';
import FeaturedRow from '../components/FeaturedRow';
import Slider from '../../assets/components/slideShow/Slider';
import React from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Image
          style={styles.bellIcon}
          source={require('../../assets/images/icon_menu.png')}
        />
        <View style={styles.locationContainer}>
          <Text style={{color: '#FC6E2A', fontWeight: 'bold'}}>DELIVER TO</Text>
          <View style={styles.location}>
            <Text>Location</Text>
            <Image
              style={styles.downArrow}
              source={require('../../assets/images/icon_down.png')}
            />
          </View>
        </View>
        <Image
          style={styles.bagIcon}
          source={require('../../assets/images/icon_bag.png')}
        />
      </View>
      <View style={{marginHorizontal: 15, flexDirection: 'row'}}>
        <Text style={{fontSize: 16, color: '#1E1D1D'}}>Hello 12 Coffee, </Text>
        <Text style={{fontWeight: 'bold', fontSize: 16, color: '#1E1D1D'}}>
          Hi Duc!
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Image
            source={require('../../assets/images/search.png')}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Bạn đang tìm kiếm gì ?"
            style={styles.input}
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        <Slider />
        <Categories />
        <View>
          <Text
            style={{
              color: '#000',
              fontWeight: 'bold',
              fontSize: 16,
              marginHorizontal: 15,
              marginTop: 10,
            }}>
            Giới thiệu
          </Text>
          {[featured, drinkFeatured, hotPodFeatured].map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.title}
                restaurants={item.restaurant}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  bellIcon: {
    width: 30,
    height: 30,
  },
  locationContainer: {
    flexDirection: 'column',
    marginLeft: 15,
    flex: 1,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  downArrow: {
    width: 10,
    height: 10,
    alignSelf: 'center',
    marginLeft: 8,
  },
  bagIcon: {
    width: 30,
    height: 30,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
  },
  searchBox: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    borderRadius: 30,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: '#FFFFFF',
  },
  searchIcon: {
    height: 25,
    width: 25,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  address: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
  textAddress: {
    fontSize: 14,
    color: '#333',
  },
  filter: {
    backgroundColor: '#E0E0E0',
    padding: 15,
    borderRadius: 30,
    marginLeft: 10,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
});

export default HomeScreen;
