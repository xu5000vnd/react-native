import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({ label, placeholder, onChangeText, value, secureTextEntry, keyboardType, editable }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelInput}>{label}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType || 'default'}
        editable={editable === false ? false : true}
      />
    </View>
  );
};

const styles = {
  textInput: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelInput: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};
export { Input };
