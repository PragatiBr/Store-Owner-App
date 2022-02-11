import { DrawerActions } from "@react-navigation/native";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

class SideMenuBar extends Component{
  render(){
    return <Icon name="menu" size={35} style={styles.iconStyle} onPress={() => this.props.onPress.navigation.openDrawer()} />
  }
}

const styles = StyleSheet.create({
  iconStyle: {
    backgroundColor: 'black',
    color: 'white',
    position: 'absolute',
  },
});

export default SideMenuBar;