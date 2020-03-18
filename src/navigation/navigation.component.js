import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomescreenTab} from '../screens/homescreen.tab';
import {DetailsScreen} from '../screens/homescreen.details';
import ProfilscreenTab from '../screens/profilscreen.tab';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import SafeAreaView from 'react-native-safe-area-view';
import {LibrariesScreen} from '../screens/libraries.indrawer';
import {ThemeContext} from '../../theme-context';
import NotificationsScreenTab from '../screens/notificationsscreen.tab';

const PersonIcon = style => <Icon {...style} name="person-outline" />;

const BellIcon = style => <Icon {...style} name="bell-outline" />;

const EmailIcon = style => <Icon {...style} name="email-outline" />;

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
    <BottomTab.Screen name="Notifications" component={NotificationsScreenTab} />
    <BottomTab.Screen name="Profil" component={ProfilscreenTab} />
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
    <Stack.Screen name="Home" component={HomescreenTab} />
    <Stack.Screen name="HomeDetail" component={DetailsScreen} />
  </Stack.Navigator>
);
