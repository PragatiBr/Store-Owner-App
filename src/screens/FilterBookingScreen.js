import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class FilterScreen extends Component{
  render(){
    return(
      <View style={{ flexDirection: 'row' }}>
        <View style={{
          backgroundColor: 'lightgrey',
          borderRadius: 50 / 2,
          width: 55,
          height: 45,
          position: 'absolute',
        }}>
          <Text style={{
            color: 'black', fontSize: 20, fontWeight: 'bold', textAlign: 'center', paddingVertical: 8
          }}>Logo</Text>
        </View>
        <Icon name="menu" size={30} style={styles.iconStyle} onPress={() => this.props.navigation.openDrawer()} />
        <View style={styles.containerStyle}>
          <Text style={styles.textStyle}>VENUE</Text>
          <Text style={styles.textStyle}>MEAL TYPE</Text>
          <Text style={styles.textStyle}>STATUS</Text>
          <Text style={styles.textStyle}>TIME SLOT</Text>  
        </View>
        <Icon name="done" size={30} color='white' style={styles.doneIcon} onPress={() => this.props.navigation.navigate('Bookings')} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  iconStyle: {
    backgroundColor: 'black',
    color: 'white',
    height: 35,
    marginTop: 45,
    padding: 5,
    width: 50,
  },
  containerStyle:{
    alignItems:'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  textStyle:{
    borderWidth: 1,
    borderColor: 'silver',
    backgroundColor: 'silver',
    color: 'black',
    width: 200,
    height: 40,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 10,
    borderRadius:5,
  },
  doneIcon:{
    backgroundColor:'deepskyblue',
    borderRadius: 20,
    width: 60,
    alignSelf: 'flex-end',
    paddingLeft: 15,
  }
});