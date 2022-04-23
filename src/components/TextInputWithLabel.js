/* eslint-disable prettier/prettier */
import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const TextInputWithLabel = ({
  label,
  value,
  placeHolder,
  isSecure,
  onChangeText,
  ...props
}) => {
  return (
    <View style={{marginBottom: 16}}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeHolder}
        onChangeText={onChangeText}
        style={styles.container}
        placeholderTextColor="gray"
        {...props}
      />
    </View>
  );
};

export default TextInputWithLabel;

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderWidth: 1,
    borderColor: 'gray',
    color: 'black',
  },
  labelText: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
    color: 'black',
  },
});
