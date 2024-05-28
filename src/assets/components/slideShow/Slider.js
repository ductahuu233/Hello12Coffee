import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import SlideItem from './SlideItem';
import Pagination from './Pagination';

const {width, height} = Dimensions.get('screen');

const Slider = () => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListReft = useRef(null);
  const data = [
    {
      id: 1,
      img: require('../../../assets/images/SilderShow/banner_1.jpg'),
    },
    {
      id: 2,
      img: require('../../../assets/images/SilderShow/banner_2.jpg'),
    },
    {
      id: 3,
      img: require('../../../assets/images/SilderShow/banner_3.jpg'),
    },
    {
      id: 4,
      img: require('../../../assets/images/SilderShow/banner_4.jpg'),
    },
    {
      id: 5,
      img: require('../../../assets/images/SilderShow/banner_5.jpg'),
    },
  ];

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
    // console.log('viewableItems', viewableItems);

    if (viewableItems && viewableItems.length > 0) {
      setIndex(viewableItems[0].index || 0);
    }
  }).current;

  const viewAbilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (index + 1) % data.length;
      setIndex(newIndex);
      scrollX.setValue(newIndex * width);
      flatListReft.current.scrollToIndex({animated: true, index: newIndex});
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListReft}
        data={data}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewAbilityConfig}
      />
      <Pagination data={data} scrollX={scrollX} index={index} />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 600,
  },
});
