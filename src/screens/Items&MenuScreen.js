import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class ItemsMenuScreen extends Component{
  render(){
    return(
      <View>
        <View style={{
          backgroundColor: 'lightgrey',
          borderRadius: 50/2,
          width: 55,
          height: 45,
          position: 'absolute',
        }}>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', textAlign: 'center', paddingVertical: 8 
          }}>Logo</Text>
        </View>
        <Icon name="menu" size={30} style={styles.iconStyle} onPress={() => this.props.navigation.openDrawer()} />
        <Text onPress={() => this.props.navigation.navigate('AddonCategory')}>Items And Menu Screen </Text>
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
});