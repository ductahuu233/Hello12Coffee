import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, OrderScreen} from '../../index';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../constants/COLORS';
import LoveScreen from '../Love/LoveScreen';
import NotificationScreen from '../Notification/NotificationScreen';
import {Image, TouchableOpacity, View} from 'react-native';
import SettingScreen from '../Settings/SettingScreen';
import AnimatedTabBar from '@gorhom/animated-tabbar';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';

const BottomNavigation = ({navigation}) => {
  const Tab = AnimatedTabBarNavigator();
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#2F7C6E',
        inactiveTintColor: '#222222',
      }}
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
          tabBarIcon: () => (
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
          tabBarIcon: () => (
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
            <Image
              source={require('../../assets/images/icon_bell.png')}
              color={COLORS.App}
              style={{width: 30, height: 30, alignSelf: 'center'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          tabBarLabel: 'Đơn hàng',
          tabBarIcon: () => (
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
          tabBarIcon: () => (
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
