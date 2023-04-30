/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppTabParamList, AppStackParamList} from '@app/navigation';
import {TabBar} from '@app/navigation/tabbar';
import {Home} from '@app/screens/home';
import {Search} from '@app/screens/search';
import {Favorite} from '@app/screens/favorite';
import {Payment} from '@app/screens/payment';
import {Food} from '@app/screens/food';
import {Delivery} from '@app/screens/delivery';

const Tab = createBottomTabNavigator<AppTabParamList>();
const Stack = createNativeStackNavigator<AppStackParamList>();

const Main = (): JSX.Element => {
  return (
    <Tab.Navigator
      tabBar={TabBar}
      initialRouteName="home"
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="search" component={Search} />
      <Tab.Screen name="favorite" component={Favorite} />
      <Tab.Screen name="payment" component={Payment} />
    </Tab.Navigator>
  );
};

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="main"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="main" component={Main} />
        <Stack.Screen name="food" component={Food} />
        <Stack.Screen name="delivery" component={Delivery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
