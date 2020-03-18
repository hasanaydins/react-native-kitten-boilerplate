import {
  Divider,
  Icon,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import SafeAreaView from 'react-native-safe-area-view';
import {StatusBar} from 'react-native';
import View from '../components/base_components/View';
import Text from '../components/base_components/Text';
import Button from '../components/base_components/Button';
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
      flex={1}
      style={{
        backgroundColor: currentTheme === 'light' ? '#FFFFFF' : '#222B45',
      }}>
      <StatusBar
        barStyle={currentTheme === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={currentTheme === 'light' ? 'white' : '#222B45'}
      />
      <TopNavigation
        title="Libraries"
        alignment="center"
        leftControl={BackAction()}
      />
      <Divider />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Libraries screen in drawer</Text>
      </View>
    </SafeAreaView>
  );
};
