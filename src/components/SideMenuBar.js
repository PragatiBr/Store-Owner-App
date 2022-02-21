import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

class SideMenuBar extends Component{
  render(){
    return(
      <View>
        <View style={{position: 'absolute',}}>
          <Image source={require('../assets/images/app_logo.jpeg')} style={{width: 60, height: 60, alignSelf: 'center', paddingTop: 10, borderRadius: 60/2}} />
        </View>
        <Icon name="menu" size={30} style={styles.iconStyle} onPress={() => this.props.onPress.openDrawer()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle: {
    backgroundColor: 'black',
    color: 'white',
    width: 40,
    height: 35,
    marginTop: 60,
    padding: 6,
  },
});

export default SideMenuBar;