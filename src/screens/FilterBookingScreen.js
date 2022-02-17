import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BackgroundImage from "../components/BackgroundImage";
import SideMenuBar from "../components/SideMenuBar";

export default class FilterScreen extends Component {
  render() {
    return (
      <View>
        <BackgroundImage />
        <View style={{ flexDirection: 'row' }}>
          <SideMenuBar onPress={this.props.navigation} />
          <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>VENUE</Text>
            <Text style={styles.textStyle}>MEAL TYPE</Text>
            <Text style={styles.textStyle}>STATUS</Text>
            <Text style={styles.textStyle}>TIME SLOT</Text>
          </View>
          <Icon name="done" size={30} color='white' style={styles.doneIcon} onPress={() => this.props.navigation.navigate('Bookings')} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  textStyle: {
    borderWidth: 1,
    borderColor: 'silver',
    backgroundColor: 'silver',
    color: 'black',
    width: 300,
    height: 40,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 10,
    borderRadius: 5,
  },
  doneIcon: {
    backgroundColor: 'deepskyblue',
    borderRadius: 20,
    width: 60,
    alignSelf: 'flex-end',
    paddingLeft: 15,
  }
});