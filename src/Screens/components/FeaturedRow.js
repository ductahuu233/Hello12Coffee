import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import RestaurantCard from './RestaurantCard';

export default function FeaturedRow({title, description, restaurants}) {
  return (
    <View style={{flex: 1, padding: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text style={{color: '#000', fontWeight: 'bold'}}>{title}</Text>
          <Text style={{color: '#000'}}>{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{color: '#ffa500'}}>Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 0,
        }}>
        {restaurants.map((restaurant, index) => {
          return (
            <RestaurantCard item={restaurant} key={restaurant.id || index} />
          );
        })}
      </ScrollView>
    </View>
  );
}
