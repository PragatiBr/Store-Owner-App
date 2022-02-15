import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class ItemsMenuScreen extends Component {
  render() {
    return (
      <View>
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
          <Text style={styles.textStyle} onPress={() => this.props.navigation.navigate('AddonCategory')}>Addon Category</Text>
          <Text style={styles.textStyle} onPress={() => this.props.navigation.navigate('Addons')}>Addons</Text>
          <Text style={styles.textStyle} onPress={() => this.props.navigation.navigate('MenuCategory')}>Menu Categories</Text>
          <Text style={styles.textStyle} onPress={() => this.props.navigation.navigate('Items')}>Items</Text>
        </View>
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
  },
  textStyle:{
    borderWidth: 1,
    borderColor: 'rgba(111, 202, 186, 1)',
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
  }
});