import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Homescreen} from '../screens/homescreen';
import {DetailsScreen} from '../screens/homescreen.details';
import Profilscreen from '../screens/profilscreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import SafeAreaView from 'react-native-safe-area-view';
import {LibrariesScreen} from '../screens/drawerscreen1';
import {ThemeContext} from '../../theme-context';
import Notificationscreen from '../screens/notificationscreen';
import {HomeDrawer} from './home.drawer.components';

const PersonIcon = style => <Icon {...style} name="person-outline" />;
const BellIcon = style => <Icon {...style} name="bell-outline" />;

// baslangıc root navigatorü drawerla calıstır ve taba bagla
export const AppNavigator = () => (
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
);

// ilk taba ana sayfayı bagla ve tab navigatoru baslat
const Drawer = createDrawerNavigator();
export const RootNavigator = ({navigation, state}) => {
  return (
    <Drawer.Navigator
      screenOptions={{gestureEnabled: true}}
      drawerType="slide"
      drawerContent={props => <HomeDrawer {...props} />}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      {/* drawerdaki 2.menu */}
      <Drawer.Screen name="Drawer1" component={LibrariesScreen} />
    </Drawer.Navigator>
  );
};

// bottomtabdaki screenler
const BottomTab = createBottomTabNavigator();
const TabNavigator = () => (
  <BottomTab.Navigator tabBar={props => <BottomTabBar {...props} />}>
    <BottomTab.Screen name="Home" component={HomeNavigator} />
    <BottomTab.Screen name="Notifications" component={Notificationscreen} />
    <BottomTab.Screen name="Profil" component={Profilscreen} />
  </BottomTab.Navigator>
);

// bottomtabda yazılacaklar
const BottomTabBar = ({navigation, state}) => {
  const onSelect = index => {
    navigation.navigate(state.routeNames[index]);
  };
  const themeContext = React.useContext(ThemeContext);
  const currentTheme = themeContext.theme;

  return (
    <SafeAreaView
      style={{
        backgroundColor: currentTheme === 'light' ? '#FFFFFF' : '#222B45',
      }}>
      <BottomNavigation selectedIndex={state.index} onSelect={onSelect}>
        <BottomNavigationTab
          title="Home"
          icon={PersonIcon}
          style={{padding: 20}}
          titleStyle={{fontFamily: 'Poppins'}}
        />
        <BottomNavigationTab
          title="Notifications"
          icon={BellIcon}
          style={{padding: 20}}
          titleStyle={{fontFamily: 'Poppins'}}
        />
        <BottomNavigationTab
          title="Profil"
          icon={BellIcon}
          style={{padding: 20}}
          titleStyle={{fontFamily: 'Poppins'}}
        />
      </BottomNavigation>
    </SafeAreaView>
  );
};

// anasayfa stacki ve onun detayı
const Stack = createStackNavigator();
const HomeNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Home" component={Homescreen} />
    <Stack.Screen name="HomeDetail" component={DetailsScreen} />
  </Stack.Navigator>
);
