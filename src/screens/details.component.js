import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {ThemeContext} from '../../theme-context';
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

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
        backgroundColor="#A000D8"
      />
      <TopNavigation
        title="MyApp"
        alignment="center"
        leftControl={BackAction()}
      />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1">Poppins</Text>
      </Layout>
    </SafeAreaView>
  );
};
