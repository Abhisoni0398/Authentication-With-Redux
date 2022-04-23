/* eslint-disable prettier/prettier */
import React from 'react';
import Routes from './src/navigation/routes';
import FlashMessage from 'react-native-flash-message';
import {View, Text} from 'react-native';
export default function App() {
  return (
    <View style={{flex: 1}}>
      <Routes />
      <FlashMessage position="top" />
    </View>
  );
}
