import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class TableShiftScreen extends Component{
  render(){
    return(
      <View style={{ backgroundColor: 'black', flex: 1 }}>
        <View style={styles.containerStyle}>
          <Text onPress={() => this.props.navigation.navigate('ShiftInfo')} style={styles.textStyle}>Shift Information</Text>
        </View>
        <View style={styles.containerStyle}>
          <Text onPress={() => this.props.navigation.navigate('TableSetup')} style={styles.textStyle}>Table Setup</Text>
        </View>
        <View style={styles.containerStyle}>
          <Text onPress={() => this.props.navigation.navigate('AdditionalInfo')} style={styles.textStyle}>Additional Information</Text>
        </View>
        <View style={styles.buttonStyle}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Store')}>
            <Icon name="back" size={20} color="black" style={{ alignSelf: 'center' }} />
            <Text onPress={() => this.props.navigation.navigate('Home')} style={styles.buttonTextStyle}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'lightsteelblue',
    width: 250,
    height: 40,
    marginTop: 5,
    marginLeft: 10,
  },
  textStyle:{
    fontWeight: 'bold',
    color: 'black',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  buttonStyle:{
    marginLeft: Dimensions.get('window').width - 120,
    backgroundColor: 'mediumturquoise',
    color: 'black',
    width: 65,
    height: 40,
    marginTop: 10,
    borderRadius: 8,
  },
  buttonTextStyle:{
    paddingLeft: 5,
    color: 'black',
    fontSize: 15,
    alignSelf: 'center',
  }
});