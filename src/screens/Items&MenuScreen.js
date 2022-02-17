import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';
import BackgroundImage from "../components/BackgroundImage";
import SideMenuBar from "../components/SideMenuBar";

export default class ItemsMenuScreen extends Component {
  render() {
    return (
      <View>
        <BackgroundImage />
        <SideMenuBar onPress={this.props.navigation} />
        <View style={styles.containerStyle}>
          <Text style={styles.textStyle} onPress={() => this.props.navigation.navigate('AddonCategory')}>ADDON CATEGORY</Text>
          <Text style={styles.textStyle} onPress={() => this.props.navigation.navigate('Addons')}>ADDONS</Text>
          <Text style={styles.textStyle} onPress={() => this.props.navigation.navigate('MenuCategory')}>MENU CATEGORY</Text>
          <Text style={styles.textStyle} onPress={() => this.props.navigation.navigate('Items')}>ITEMS</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    alignItems:'center',
  },
  textStyle:{
    backgroundColor: 'rgba(111, 202, 186, 1)',
    color: 'white',
    width: 400,
    height: 50,
    textAlign: 'center',
    padding: 10,
    fontWeight: '600',
    fontSize: 20,
    marginVertical: 10,
    borderRadius:5,
  },
});