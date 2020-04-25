import React from 'react';
import Routes from './src/routes';
import { StatusBar } from 'react-native'


 function App() {
  return (
   // equivalente ao component Fragment 
    <> 
      <StatusBar barStyle="light-content" backgroundColor="#ffc107" />
      <Routes />
    </>
  );
}

export default App;