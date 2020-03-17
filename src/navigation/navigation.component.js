import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/homescreen';
import {DetailsScreen} from '../screens/homescreen.details';
import ProfilScreen from '../screens/profilscreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native';

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
const BottomTab = createBottomTabNavigator();

const TabNavigator = () => (
  <BottomTab.Navigator tabBar={props => <BottomTabBar {...props} />}>
    <BottomTab.Screen name="Home" component={HomeNavigator} />
    <BottomTab.Screen name="Profil" component={ProfilScreen} />
  </BottomTab.Navigator>
);

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

const BottomTabBar = ({navigation, state}) => {
  const onSelect = index => {
    navigation.navigate(state.routeNames[index]);
  };

  return (
    <SafeAreaView>
      <BottomNavigation selectedIndex={state.index} onSelect={onSelect}>
        <BottomNavigationTab title="HOME" />
        <BottomNavigationTab title="PROFIL" />
      </BottomNavigation>
    </SafeAreaView>
  );
};
