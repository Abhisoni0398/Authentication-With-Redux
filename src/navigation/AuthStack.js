/* eslint-disable prettier/prettier */
import React from 'react';
import {Login, SignUp} from '../index';
export default function (Stack) {
  return (
    <>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </>
  );
}
