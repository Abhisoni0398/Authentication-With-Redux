/* eslint-disable prettier/prettier */
import React from "react";
import Routes from "./src/navigation/routes";
import FlashMessage from "react-native-flash-message";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
export default function App() {
  return (
    <Provider store={store}>
      <Routes />
      <FlashMessage position="top" />
    </Provider>
  );
}
