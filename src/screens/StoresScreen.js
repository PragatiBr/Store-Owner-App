import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DotIcon from 'react-native-vector-icons/Octicons';

export default class StoresScreen extends Component{
  render() {
    const { iconStyle, dotIconStyle, textStyle, containerStyle, imageStyle, tableShiftStyle } = styles;
    return (
      <ScrollView horizontal>
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
        <Icon name="menu" size={30} style={iconStyle} onPress={() => this.props.navigation.openDrawer()} />
        <View style={{ marginTop: 40}}>
          <View style={containerStyle}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
              <ImageBackground source={require('../assets/images/shop-store.jpg')} style={imageStyle}>
                <DotIcon name="primitive-dot" size={35} color="green" style={dotIconStyle} />
              </ImageBackground>
            </TouchableOpacity>
            <Text onPress={() => this.props.navigation.navigate('Edit')} style={textStyle}>EDIT</Text>
            <Text onPress={() => this.props.navigation.navigate('TableShift')} style={tableShiftStyle}>TABLE & SHIFTS</Text>
            <Text style={textStyle}>SETTINGS</Text>
          </View>
          <View style={containerStyle}>
            <ImageBackground source={require('../assets/images/shop-store.jpg')} style={imageStyle} >
              <DotIcon name="primitive-dot" size={35} color="green" style={dotIconStyle} />
            </ImageBackground>
            <Text style={textStyle}>EDIT</Text>
            <Text style={tableShiftStyle}>TABLE & SHIFTS</Text>
            <Text style={textStyle}>SETTINGS</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    flexDirection: "row", 
    marginLeft: 50,
    justifyContent: 'space-between',
    height: 180,
  },
  iconStyle:{
    backgroundColor: 'black',
    color: 'white',
    height: 35,
    marginTop: 45,
    padding: 5
  },
  imageStyle:{
    width: 150,
    height: 150,
  },
  dotIconStyle:{
    margin:5,
    right:0,
    top: 0,
    position:'absolute',
    alignSelf: 'flex-end',
  },
  textStyle:{
    backgroundColor: 'lightsteelblue',
    color: 'white',
    fontSize: 20,
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 50,
    width: 130,
    height: 50,
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
    borderColor: 'lightsteelblue',
    fontWeight: 'bold',
  },
  tableShiftStyle:{
    backgroundColor: 'lightsteelblue',
    color: 'white',
    fontSize: 20,
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 50,
    width: 220,
    height: 50,
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
    borderColor: 'lightsteelblue',
    fontWeight: 'bold',
  }
});