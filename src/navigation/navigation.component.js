import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomescreenTab} from '../screens/homescreen.tab';
import {DetailsScreen} from '../screens/homescreen.details';
import ProfilscreenTab from '../screens/profilscreen.tab';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native';
import {LibrariesScreen} from '../screens/libraries.indrawer';

// baslangıc root navigatorü drawerla calıstır ve taba bagla
export const AppNavigator = () => (
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
);

// ilk taba ana sayfayı bagla ve tab navigatoru baslat
const Drawer = createDrawerNavigator();
export const RootNavigator = (): React.ReactElement => (
  <Drawer.Navigator screenOptions={{gestureEnabled: true}}>
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name="Libraries" component={LibrariesScreen} />
    {/* drawerdaki 2.menu */}
  </Drawer.Navigator>
);

// bottomtabdaki screenler
const BottomTab = createBottomTabNavigator();
const TabNavigator = () => (
  <BottomTab.Navigator tabBar={props => <BottomTabBar {...props} />}>
    <BottomTab.Screen name="Home" component={HomeNavigator} />
    <BottomTab.Screen name="Profil" component={ProfilscreenTab} />
  </BottomTab.Navigator>
);

// bottomtabda yazılacaklar
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

// anasayfa stacki ve onun detayı
const Stack = createStackNavigator();
const HomeNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Home" component={HomescreenTab} />
    <Stack.Screen name="HomeDetail" component={DetailsScreen} />
  </Stack.Navigator>
);
