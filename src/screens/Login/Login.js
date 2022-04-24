/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import ButtonWithLoader from "../../components/ButtonWithLoader";
import validator from "../../utils/validations";
import action from "../../redux/action";
import { showError, showSuccess } from "../../utils/helperFunction";
const Login = ({ navigation }) => {
  const [state, setState] = useState({
    isLoading: false,
    email: "",
    password: "",
    isSecure: true,
  });
  const { isLoading, email, password, isSecure } = state;
  const updateState = (data) => setState(() => ({ ...state, ...data }));
  const isValidData = () => {
    const error = validator({
      email,
      password,
    });
    if (error) {
      showError(error);
      return false;
    }
    showSuccess("Login Successful");
    return true;
  };
  const onLogin = async () => {
    const checkValid = isValidData();
    if (checkValid) {
      updateState({ isLoading: true });
      try {
        const res = await action.login({
          email,
          password,
        });
        console.log("res===>>>", res);
        updateState({ isLoading: false });
      } catch (error) {
        console.log("error===>>>>");
        showError(error.message);
        updateState({ isLoading: false });
      }
    }
  };
  return (
    <View style={styles.container}>
      <TextInputWithLabel
        placeHolder="Enter your email"
        label="Email"
        onChangeText={(email) => updateState({ email })}
      />
      <TextInputWithLabel
        placeHolder="Enter your password"
        label="Password"
        secureTextEntry={isSecure}
        onChangeText={(password) => updateState({ password })}
      />
      <ButtonWithLoader text="Login" onPress={onLogin} isLoading={isLoading} />
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "white",
    paddingHorizontal: 16,
  },
});
