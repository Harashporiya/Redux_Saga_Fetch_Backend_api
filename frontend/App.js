import React from 'react';
import { Provider } from 'react-redux';
import store from './components/reduxs/store'; // Import your store
import Signup from './components/Signup'; // Import your signup component
import Login from './components/Login'; // Import your login component
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{padding:30,flex:1,justifyContent:"center"}}>
    <Provider store={store}>
      <Signup />
      {/* <Login/> */}
    </Provider>
    </View>
  );
}
