import React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {AppNavigator} from './navigation/navigation.component';
import {default as customMapping} from '../custom-mapping.json'; // <-- Import custom mapping
import {ThemeContext} from '../theme-context';
import * as eva from '@eva-design/eva';
import {mapping, light, dark} from '@eva-design/eva';

const themes = {light, dark};

const App = () => {
  const [theme, setTheme] = React.useState('light');
  const currentTheme = themes[theme];

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <ApplicationProvider
          {...eva}
          mapping={mapping}
          theme={currentTheme}
          customMapping={customMapping}>
          <AppNavigator />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </React.Fragment>
  );
};

export default App;
