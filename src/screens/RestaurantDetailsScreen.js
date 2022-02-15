import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class RestaurantDetail extends Component{
  render(){
    const {image}  = this.props.route.params; 
    const { iconStyle, imageStyle, textStyle, headingStyle } = styles;
    
    return(
      <View>
        <Icon name="menu" size={35} style={iconStyle} onPress={() => this.props.navigation.openDrawer()} /> 
        <View style={{ marginTop: 50}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Store')}>
            <Image source={JSON.stringify(image)} style={imageStyle} />
          </TouchableOpacity>
          <Text style={headingStyle}>Restaurant name</Text>
          <Text style={textStyle}>Location: 79 Halifax Street</Text>
          <Text style={textStyle}>Status: Active</Text>
          <Text style={textStyle}>Created At: 10/11/2021</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle:{
    position: 'absolute',
    backgroundColor: 'black',
    color: 'white',
  },
  imageStyle:{
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  headingStyle:{
    marginTop: 15,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
  },
  textStyle:{
    marginLeft: 40,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginTop:10,
  },
});