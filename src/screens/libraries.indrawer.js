import {
  Divider,
  Icon,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native';
import View from '../components/base_components/View';
import Text from '../components/base_components/Text';
import Button from '../components/base_components/Button';
import React from 'react';

export const LibrariesScreen = ({navigation}) => {
  const BackIcon = style => <Icon {...style} name="arrow-back" />;

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );
  return (
    <SafeAreaView flex={1}>
      <TopNavigation
        title="Libraries"
        alignment="center"
        leftControl={BackAction()}
      />
      <Divider />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Libraries ekranı</Text>
        <Button>Libraries</Button>
      </View>
    </SafeAreaView>
  );
};
