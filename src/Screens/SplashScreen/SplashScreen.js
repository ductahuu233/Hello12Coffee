import {Image, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen = ({navigation}) => {
  //xu ly event run in 2s
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('OnBroadingScreen1');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View
      style={{
        backgroundColor: '#EDAF81',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../../assets/images/hello_12_prev_ui.png')}
        style={{
          width: 400,
          height: 400,
          alignSelf: 'center',
          resizeMode: 'contain',
        }}
      />
    </View>
  );
};
export default SplashScreen;
