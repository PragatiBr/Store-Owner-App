import React, { Component } from "react";
import { View,  StyleSheet, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class ItemMenuHeader extends Component{
  render(){
    return(
      <View style={styles.containerStyle}>
        <TextInput 
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChangeText={this.props.onChangeText}
          style={styles.inputStyle}
        />
        <View style={styles.addButton}>
          <Icon
            color={'white'}
            name="add"
            size={25}
            onPress={this.props.onPress}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  addButton: {
    backgroundColor: 'blue',
    width: 40,
    height: 40,
    borderRadius: 8,
    alignSelf: 'center',
    padding: 6,
  },
  inputStyle :{
    backgroundColor: 'silver',
    borderRadius: 15,
    padding: 7,
    width: 400,
    height: 40,
    paddingLeft: 20,
  },
})