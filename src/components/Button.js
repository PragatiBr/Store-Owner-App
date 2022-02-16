/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    flex:1,
    alignSelf:'stretch',
    backgroundColor: 'slateblue',
    borderWidth:1,
    borderRadius:5,
    borderColor: 'slateblue',
    marginHorizontal:12
  },
  textStyle:{
    alignSelf:'center',
    color: 'white',
    fontSize:  20,
    fontWeight:'600',
    paddingTop:5,
    paddingBottom:5,
  },
});

export { Button };
