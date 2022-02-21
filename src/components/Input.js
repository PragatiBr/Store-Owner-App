import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet } from 'react-native';

class Input extends Component {
  render(){
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>{this.props.label}</Text>
        <TextInput
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
          style={styles.inputStyle}
          placeholderTextColor='black'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputStyle: {
    borderWidth: 1,
    height: 35,
    padding: 5,
    width: 400,
    borderRadius: 5,
    borderColor: 'black',
  },
  labelStyle: {
    color: 'black',
    marginTop: 5,
    fontSize: 20,
    textAlign: 'center'
  },
});

export default Input;