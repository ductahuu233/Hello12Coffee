import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const SECTIONS = [
  {
    title: 'PREFERENCES',
    data: [
      {
        text: 'Language',
        icon: require('../../assets/images/translate.png'),
        color: '#ffff00',
      },
      {
        text: 'Dark Mode',
        key: 'darkMode',
        color: '#3d85c6',
        type: 'toggle',
        icon: require('../../assets/images/night-mode.png'),
      },
      {
        text: 'Use Wi-Fi',
        key: 'wifi',
        color: '#3d85c6',
        type: 'toggle',
        icon: require('../../assets/images/wifi.png'),
      },
      {
        text: 'Location',
        color: '#6aa84f',
        icon: require('../../assets/images/placeholder.png'),
      },
      {
        text: 'Order Product',
        icon: require('../../assets/images/online-order.png'),
        key: 'orderProduct',
        color: '#6aa84f',
        type: 'toggle',
      },
      {
        text: 'Notification',
        icon: require('../../assets/images/bell.png'),
        key: 'notification',
        color: '#c27ba0',
        type: 'toggle',
      },
    ],
  },
  {
    title: 'HELP',
    data: [
      {
        text: 'Report Bug',
        color: '#999999',
        icon: require('../../assets/images/bug.png'),
      },
      {
        text: 'Contact Us',
        color: '#3d85c6',
        icon: require('../../assets/images/email.png'),
      },
    ],
  },
  {
    title: 'CONTENT',
    data: [
      {
        text: 'Log out',
        color: '#6aa84f',
        icon: require('../../assets/images/logout.png'),
      },
    ],
  },
];

const SettingScreen = ({navigation}) => {
  const [form, setForm] = React.useState({
    darkMode: true,
    wifi: false,
    showCollaborators: true,
    accessibilityMode: false,
  });
  const toggleSwitch = key => {
    setForm({...form, [key]: !form[key]});
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profile}>
          <TouchableOpacity
            onPress={
              () => {}
              //handle onPress
            }>
            <View style={styles.profileAvatarWrapper}>
              <Image
                alt="Profile Picture"
                source={require('../../assets/images/mi_cay.jpg')}
                style={styles.profileAvatar}
              />
              <View style={styles.profileAction}>
                <Image
                  source={require('../../assets/images/pencil.png')}
                  style={{width: 15, height: 15}}
                />
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.profileName}>Duc Huu Ta</Text>
          <Text style={styles.profileAddress}>
            Vu Xa,Yen Bac,Duy Tien,Ha Nam
          </Text>
        </View>

        {SECTIONS.map(({title, data}) => (
          <View style={styles.section} key={title}>
            <Text style={styles.sectionHeader}>{title}</Text>
            {data.map((item, index, id, type, icon, color) => (
              <TouchableOpacity onPress={() => {}} key={index}>
                <View style={styles.row}>
                  <View style={[styles.rowIcon, {backgroundColor: color}]}>
                    <Image source={item.icon} style={{width: 20, height: 20}} />
                  </View>
                  <Text style={{color: Colors.black}}>{item.text}</Text>
                  {type === 'toggle' && (
                    <View>
                      <TouchableOpacity onPress={() => toggleSwitch(item.key)}>
                        <Image
                          source={
                            form[item.key]
                              ? require('../../assets/images/on-button.png')
                              : require('../../assets/images/off-button.png')
                          }
                          style={{width: 40, height: 24}}
                        />
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  profile: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileName: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: '600',
    color: '#414d63',
    textAlign: 'center',
  },
  profileAvatarWrapper: {
    position: 'relative',
  },
  profileAvatar: {
    width: 72,
    height: 72,
    borderRadius: 9999,
  },
  profileAction: {
    width: 28,
    height: 28,
    borderRadius: 9999,
    backgroundColor: '#007bff',
    position: 'absolute',
    right: -4,
    bottom: -10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileAddress: {
    marginTop: 5,
    fontSize: 16,
    color: '#989898',
    textAlign: 'center',
  },
  section: {
    paddingHorizontal: 24,
  },
  sectionHeader: {
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: '600',
    color: '#9e9e9e',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 50,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 12,
    marginBottom: 12,
    borderRadius: 8,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  rowLabel: {
    fontSize: 17,
    color: '#0c0c0c',
  },
});
export default SettingScreen;
