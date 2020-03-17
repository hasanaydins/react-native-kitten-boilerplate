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
        backgroundColor={currentTheme === 'light' ? 'white' : '#222B45'}
      />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button style={{marginVertical: 4}} onPress={navigateDetails}>
          Open details
        </Button>
        <Button style={{marginVertical: 4}} onPress={themeContext.toggleTheme}>
          Toggle theemas
        </Button>
      </Layout>
    </SafeAreaView>
  );
};
