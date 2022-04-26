import React from 'react'
import { DarkTheme, DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

// const customTheme: Theme = {
//   dark: true,
//   colors: {
// ...DarkTheme.colors,
// ...DefaultTheme.colors,
// primary: 'string',
// background: 'black',
// card: 'string',
// text: 'string',
// border: 'string',
// notification: 'string',
//   }
// }

const App = () => {
  return (
    <AppState>
      <NavigationContainer
      // theme={customTheme}
      >
        <Navigator />
      </NavigationContainer>
    </AppState>
  )
}

const AppState = ({ children }: any) => {

  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default App;
