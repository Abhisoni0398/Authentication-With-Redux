/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import validator from '../../utils/validations';
import {showError, showSuccess} from '../../utils/helperFunction';
const SignUp = ({navigation}) => {
  const [state, setState] = useState({
    isLoading: true,
    userName: '',
    email: '',
    password: '',
    isSecure: true,
  });
  const {isLoading, userName, email, password, isSecure} = state;
  const updateState = data => setState(() => ({...state, ...data}));
  const isValidData = () => {
    const error = validator({
      userName,
      email,
      password,
    });
    if (error) {
      showError(error);
      return false;
    }
    showSuccess('Login Successful');
    return true;
  };
  const onLogin = () => {
    const checkValid = isValidData();
    if (checkValid) {
      navigation.navigate('SignUp');
    }
  };
  return (
    <View style={styles.container}>
      <TextInputWithLabel
        placeHolder="Enter your userName"
        label="userName"
        onChangeText={userName => updateState({userName})}
      />
      <TextInputWithLabel
        placeHolder="Enter your email"
        label="Email"
        onChangeText={email => updateState({email})}
      />
      <TextInputWithLabel
        placeHolder="Enter your password"
        label="Password"
        secureTextEntry={isSecure}
        onChangeText={password => updateState({password})}
      />
      <ButtonWithLoader text="Signup" onPress={onLogin} />
    </View>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
});
