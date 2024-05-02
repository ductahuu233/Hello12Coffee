import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Lottie from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
export default function OnBroadingScreen1() {
  const navigation = useNavigation();
  const handleDone = () => {
    navigation.navigate('BottomNavigation');
  };
  const doneButton = ({...props}) => {
    return (
      <TouchableOpacity {...props}>
        <Text style={{padding: 20}}>Done</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        DoneButtonComponent={doneButton}
        containerStyles={styles.containerStyles}
        pages={[
          {
            backgroundColor: '#fff',
            image: (
              <View>
                <Lottie
                  source={require('../../assets/animation/animation_noodle.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: (
              <View>
                <Lottie
                  source={require('../../assets/animation/animation_noodle.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: (
              <View>
                <Lottie
                  source={require('../../assets/animation/animation_noodle.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
