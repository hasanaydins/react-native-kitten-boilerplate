import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeContext} from '../../theme-context';
import SafeAreaView from 'react-native-safe-area-view';
import {Button, Layout} from '@ui-kitten/components';

export const HomeScreen = ({navigation}) => {
  const themeContext = React.useContext(ThemeContext);

  const currentTheme = themeContext.theme;

  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: currentTheme === 'light' ? '#FFFFFF' : '#222B45',
      }}>
      <StatusBar
        barStyle={currentTheme === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor="#A000D8"
      />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button style={{marginVertical: 4}} onPress={navigateDetails}>
          OPEN DETAILS
        </Button>
        <Button style={{marginVertical: 4}} onPress={themeContext.toggleTheme}>
          TOGGLE THEME
        </Button>
      </Layout>
    </SafeAreaView>
  );
};
