import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, OrderScreen} from '../../index';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../constants/COLORS';
import LoveScreen from '../Love/LoveScreen';
import NotificationScreen from '../Notification/NotificationScreen';
import {Image, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingScreen from '../Settings/SettingScreen';
const BottomNavigation = ({navigation}) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        tabBarActiveTintColor: '#0c090a',
        headerShown: false,
        tabBarShowLabel: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../../assets/images/icon_my_home.png')}
              color={COLORS.App}
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Love"
        component={LoveScreen}
        options={{
          tabBarLabel: 'Yêu thích',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../../assets/images/icon_my_love.png')}
              color={COLORS.App}
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Thông báo',
          tabBarIcon: ({focused, color, size}) => (
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                backgroundColor: 'white',
                alignItems: 'center',
                borderRadius: 25,
                marginBottom: 20,
                borderWidth: 1,
                borderColor: focused ? COLORS.App : color,
              }}
              onPress={() => navigation.navigate('Notification')}>
              <View
                style={{
                  alignItems: 'center',
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../assets/images/icon_bell.png')}
                  color={COLORS.App}
                  style={{width: 30, height: 30, alignSelf: 'center'}}
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          tabBarLabel: 'Đơn hàng',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../../assets/images/icon_order.png')}
              color={COLORS.App}
              style={{width: 30, height: 30, alignSelf: 'center'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Cài đặt',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../../assets/images/icon_setting.png')}
              color={COLORS.App}
              style={{width: 30, height: 30, alignSelf: 'center'}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
