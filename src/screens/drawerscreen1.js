import {
  Divider,
  Icon,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import SafeAreaView from 'react-native-safe-area-view';
import {StatusBar} from 'react-native';
import View from '../components/base/View';
import Text from '../components/base/Text';
import React from 'react';
import {ThemeContext} from '../../theme-context';

export const LibrariesScreen = ({navigation}) => {
  const themeContext = React.useContext(ThemeContext);
  const currentTheme = themeContext.theme;

  const BackIcon = style => <Icon {...style} name="arrow-back" />;

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
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
      <TopNavigation
        title="Drawer1"
        alignment="center"
        leftControl={BackAction()}
      />
      <Divider />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Drawer screen 1</Text>
      </View>
    </SafeAreaView>
  );
};
