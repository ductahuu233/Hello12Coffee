import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../Screens/SplashScreen/SplashScreen';

const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          options={{headerShown: false}}
          component={SplashScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
