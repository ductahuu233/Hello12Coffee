import React from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';

export default function RestaurantCard({item}) {
  return (
    <TouchableWithoutFeedback>
      <View
        style={{
          margin: 10,
          borderRadius: 20,
          overflow: 'hidden',
          borderColor: '#ddd',
          borderWidth: 1,
        }}>
        <Image
          style={{
            width: '100%',
            height: 180,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
          source={item.image}
        />
        <View style={{padding: 10, width: 200}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <Image
              style={{width: 15, height: 15, borderRadius: 15}}
              source={require('../../assets/images/icon_star.png')}
            />
            <Text style={{marginLeft: 5}}>
              <Text>{item.stars} </Text>
              <Text style={{color: '#888'}}>{item.reviews} reviews</Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
