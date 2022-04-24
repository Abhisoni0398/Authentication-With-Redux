/* eslint-disable prettier/prettier */
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import { useSelector } from "react-redux";
const Stack = createNativeStackNavigator();

export default function Routes() {
  const userData = useSelector((state) => state);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {false ? MainStack(Stack) : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
