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
    backgroundColor: 'black',
    color: 'white',
    width: 500,
    height: 100,
    textAlign: 'center',
    padding: 30,
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 10,
    borderRadius:5,
  },
});