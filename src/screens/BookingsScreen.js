import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ActionIcon from 'react-native-vector-icons/Ionicons';

export default class BookingsScreen extends Component {
  state = {
    search: '',
  }
  render() {
    const { iconStyle, inputStyle, buttonStyle, tableHeader, tableCell, actionIconStyle } = styles;
    return (
      <ScrollView horizontal>
        <View>
          <View style={{ flexDirection: 'row' }}>
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
              <Icon name="menu" size={30} style={iconStyle} onPress={() => this.props.navigation.openDrawer()} />
            </View>
            <TextInput
              value={this.state.search}
              placeholder="Search Customer Name"
              onChangeText={search => this.setState({ search })}
              style={inputStyle}
            />
            <Text style={[buttonStyle, { backgroundColor: 'mediumturquoise', borderRadius: 10 }]} onPress={() => this.props.navigation.navigate('Filter')} >Filter</Text>
            <View>
              <Text style={[buttonStyle, { backgroundColor: 'mediumturquoise', borderColor: 'mediumturquoise', width: 250 }]} onPress={() => this.props.navigation.navigate('AddBooking')} >+ADD BOOKING</Text>
              <Text style={[buttonStyle, { width: 250, color: 'white' }]}>12/02/2022</Text>
            </View>
          </View>
          <View style={{marginTop: 20, flexDirection: 'row'}}>
            <Text style={tableHeader}>ID</Text>
            <Text style={[tableHeader, { width: 120 }]}>CUSTOMER</Text>
            <Text style={[tableHeader, { width: 90 }]}>SHIFT</Text>
            <Text style={[tableHeader, { width: 100 }]}>TABLE NO.</Text>
            <Text style={[tableHeader, { width: 100 }]}>TIME</Text>
            <Text style={[tableHeader, { width: 100 }]}>PAX</Text>
            <Text style={[tableHeader, { width: 120 }]}>COMMENTS</Text>
            <Text style={[tableHeader, { width: 120 }]}>RESTAURANT</Text>
            <Text style={[tableHeader, { width: 100 }]}>ACTION</Text>
          </View>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <Text style={tableCell}>#HK45</Text>
            <Text style={[tableCell, { width: 120 }]}>John</Text>
            <Text style={[tableCell, { width: 120 }]}>Breakfast</Text>
            <Text style={[tableCell, { width: 100 }]}>11</Text>
            <Text style={[tableCell, { width: 100 }]}>9:30</Text>
            <Text style={[tableCell, { width: 120 }]}>5</Text>
            <Text style={[tableCell, { width: 130 }]}>2 Vegan Options</Text>
            <Text style={[tableCell, { width: 130 }]}>Greek on Halifax</Text>
            <Icon name="edit" size={30} color='blue' style={actionIconStyle} />
            <ActionIcon name="checkmark-done-circle" size={30} color='green' style={actionIconStyle} />
            <Icon name="delete" size={30} color='red' style={actionIconStyle} />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 7,
    width: 350,
    height: 40,
    paddingLeft: 20,
    marginHorizontal: 20,
    marginTop: 20
  },
  buttonStyle: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'black',
    color: 'black',
    width: 180,
    height: 40,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 18,
    marginHorizontal: 10,
    marginTop: 10
  },
  iconStyle: {
    backgroundColor: 'black',
    color: 'white',
    height: 35,
    marginTop: 45,
    padding: 5
  },
  tableHeader: {
    backgroundColor: 'silver',
    width: 50,
    height: 30,
    color:'black',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 5,
    textAlign:'center',
    marginRight:10,
  },
  tableCell:{
    color:'black',
    fontSize:15,
    textAlign:'center',
    padding:5,
  },
  actionIconStyle:{
    alignSelf:'center',
    marginLeft: 5
  },
});