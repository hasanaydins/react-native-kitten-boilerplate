import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {ThemeContext} from '../../theme-context';
import {
  Divider,
  Icon,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import View from '../components/base/View';
import Text from '../components/base/Text';

const BackIcon = style => <Icon {...style} name="arrow-back" />;

export const DetailsScreen = ({navigation}) => {
  const themeContext = React.useContext(ThemeContext);
  const currentTheme = themeContext.theme;

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
        title="Detail"
        alignment="center"
        leftControl={BackAction()}
      />
      <Divider />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Homescreen Detail</Text>
      </View>
    </SafeAreaView>
  );
};
