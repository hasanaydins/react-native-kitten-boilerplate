import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {ThemeContext} from '../../theme-context';
import {
  Divider,
  Icon,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import Box from '../components/base_components/Box';
import Text from '../components/base_components/Text';
import Button from '../components/base_components/Button';

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
        title="MyApp"
        alignment="center"
        leftControl={BackAction()}
      />
      <Divider />
      <Box style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Poppins abcdefs</Text>

        <Button>Sign Up</Button>
      </Box>
    </SafeAreaView>
  );
};
