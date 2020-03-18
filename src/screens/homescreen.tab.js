import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeContext} from '../../theme-context';
import SafeAreaView from 'react-native-safe-area-view';
import {TopNavigation, TopNavigationAction, Icon} from '@ui-kitten/components';
import {DrawerActions} from '@react-navigation/native';
import View from '../components/base_components/View';
import Text from '../components/base_components/Text';
import Button from '../components/base_components/Button';

const BackIcon = style => <Icon {...style} name="menu" />;

export const HomescreenTab = ({navigation}) => {
  const themeContext = React.useContext(ThemeContext);
  const currentTheme = themeContext.theme;

  const BackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    />
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: currentTheme === 'light' ? '#FFFFFF' : '#222B45',
      }}>
      <StatusBar
        barStyle={currentTheme === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={currentTheme === 'light' ? 'white' : '#222B45'}
      />
      <TopNavigation leftControl={BackAction()} title="Home" />

      <View flex={1} alignItems="center" justifyContent="center">
        <Text>This is Homescreen</Text>
        <Button onPress={() => navigation.navigate('HomeDetail')}>
          Go to homescreen details
        </Button>
      </View>
    </SafeAreaView>
  );
};
