import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Divider,
  Drawer,
  DrawerHeaderFooter,
  Icon,
  Layout,
  MenuItemType,
  Text,
} from '@ui-kitten/components';
import SafeAreaView from 'react-native-safe-area-view';
import {ThemeContext} from '../../theme-context';

const BackIcon = style => <Icon {...style} name="arrow-back" />;
const EmailIcon = style => <Icon {...style} name="email-outline" />;

const DATA: MenuItemType[] = [
  {title: 'Drawer Screen 1', icon: BackIcon},
  {title: 'Drawer Screen 2', icon: EmailIcon},
];

export const HomeDrawer = ({navigation}) => {
  const onItemSelect = (index: number): void => {
    switch (index) {
      case 0: {
        navigation.navigate('Drawer1');
        return;
      }
      case 1: {
        return;
      }
    }
  };

  const themeContext = React.useContext(ThemeContext);
  const currentTheme = themeContext.theme;

  const renderHeader = () => (
    <Layout style={styles.header} level="2">
      <View style={styles.profileContainer}>
        <Text style={styles.profileName} category="h6">
          App Header
        </Text>
      </View>
    </Layout>
  );
  const renderFooter = () => (
    <React.Fragment>
      <Divider />
      <DrawerHeaderFooter
        disabled={true}
        description="Drawer Footer description"
      />
    </React.Fragment>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: currentTheme === 'light' ? '#FFFFFF' : '#222B45',
      }}>
      <Drawer
        header={renderHeader}
        footer={renderFooter}
        data={DATA}
        onSelect={onItemSelect}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 128,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    marginHorizontal: 16,
  },
});
