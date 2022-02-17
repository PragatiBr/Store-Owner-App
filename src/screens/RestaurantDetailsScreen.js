import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import BackgroundImage from "../components/BackgroundImage";
import SideMenuBar from "../components/SideMenuBar";

export default class RestaurantDetail extends Component{
  render(){
    const {image}  = this.props.route.params; 
    const {imageStyle, textStyle, headingStyle } = styles;
    
    return(
      <View>
        <BackgroundImage />
        <SideMenuBar onPress={this.props.navigation} />
        <View style={{ marginTop: 50}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
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
    marginHorizontal: 300,
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    marginTop:10,
  },
});