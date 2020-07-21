import React, {useState, useMemo} from 'react';
import {
  NavigationContainer,
  DarkTheme as DarkThemeNavigation,
  DefaultTheme as DefaultThemeNavigation,
} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DarkTheme as DarkThemePaper,
  DefaultTheme as DefaultThemePaper
} from 'react-native-paper';
import {StatusBar} from 'react-native';
import Navigation from './src/navigation/Navigation';
import PreferencesContext from './src/context/PreferencesContext';

export default function App(){

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme == 'dark' ? 'light' : 'dark');
  };

  const preference = useMemo(
    () => ({
      toggleTheme,
      theme
    }),
    [theme]
  );

  DefaultThemePaper.colors.primary = '#1ae1f2';
  DarkThemePaper.colors.primary = '#1ae1f2';
  DarkThemePaper.colors.accent = '#1ae1f2';

  DarkThemeNavigation.colors.background = '#182734';
  DarkThemeNavigation.colors.card = '#15212b';


  return (
    <PreferencesContext.Provider value={preference}>
      <PaperProvider theme={theme == 'dark' ? DarkThemePaper : DefaultThemePaper}>
        <StatusBar barStyle={theme == 'dark' ? 'dark-content' : 'light-content'}/>
        <NavigationContainer theme={theme =='dark' ? DarkThemeNavigation : DefaultThemeNavigation}>
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}