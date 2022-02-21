import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Dimensions } from 'react-native';

export default class BackgroundImage extends Component{
  render(){
    return <ImageBackground source={require('../assets/images/screen-bg.jpg')} resizeMode='cover' style={styles.bgImageStyle} />
  }
}

const styles = StyleSheet.create({
  bgImageStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1,
    opacity: 0.4,
  }
})