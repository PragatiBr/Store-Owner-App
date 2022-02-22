import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput,} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ActionIcon from 'react-native-vector-icons/Ionicons';
import SideMenuBar from "../components/SideMenuBar";
import BackgroundImage from "../components/BackgroundImage";


export default class BookingsScreen extends Component {
  state = {
    search: '',
  }
  render() {
    const { inputStyle, buttonStyle, tableHeader, tableCell, actionIconStyle } = styles;
    return (
      <View>
        <BackgroundImage />
        <View style={{ flexDirection: 'row' }}>
          <SideMenuBar onPress={this.props.navigation} />
          <TextInput
            value={this.state.search}
            placeholder="Search Customer Name"
            placeholderTextColor={"black"}
            onChangeText={search => this.setState({ search })}
            style={inputStyle}
          />
          <Text style={[buttonStyle, { backgroundColor: 'mediumturquoise', borderRadius: 10 }]} onPress={() => this.props.navigation.navigate('Filter')} >Filter</Text>
          <View>
            <Text style={[buttonStyle, { backgroundColor: 'mediumturquoise', borderColor: 'mediumturquoise', width: 250 }]} onPress={() => this.props.navigation.navigate('AddBooking')} >+ADD BOOKING</Text>
            <Text style={[buttonStyle, { width: 250, color: 'white' }]}>12/02/2022</Text>
          </View>
        </View>
        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={tableHeader}>ID</Text>
          <Text style={[tableHeader, { width: 100 }]}>CUSTOMER</Text>
          <Text style={[tableHeader, { width: 80 }]}>SHIFT</Text>
          <Text style={[tableHeader, { width: 90 }]}>TABLE NO.</Text>
          <Text style={[tableHeader, { width: 70 }]}>TIME</Text>
          <Text style={[tableHeader, { width: 70 }]}>PAX</Text>
          <Text style={[tableHeader, { width: 120 }]}>COMMENTS</Text>
          <Text style={[tableHeader, { width: 120 }]}>RESTAURANT</Text>
          <Text style={[tableHeader, { width: 100 }]}>ACTION</Text>
        </View>
        <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={tableCell}>#HK45</Text>
          <Text style={[tableCell, { width: 100 }]}>John</Text>
          <Text style={[tableCell, { width: 100 }]}>Breakfast</Text>
          <Text style={[tableCell, { width: 80 }]}>11</Text>
          <Text style={[tableCell, { width: 80 }]}>9:30</Text>
          <Text style={[tableCell, { width: 70 }]}>5</Text>
          <Text style={[tableCell, { width: 130 }]}>2 Vegan Options</Text>
          <Text style={[tableCell, { width: 130 }]}>Greek on Halifax</Text>
          <Icon name="edit" size={30} color='blue' style={actionIconStyle} />
          <ActionIcon name="checkmark-done-circle" size={30} color='green' style={actionIconStyle} />
          <Icon name="delete" size={30} color='red' style={actionIconStyle} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 7,
    width: 325,
    height: 40,
    paddingLeft: 20,
    marginHorizontal: 30,
    marginTop: 20,
    fontSize: 15,
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
    marginTop: 20
  },
  tableHeader: {
    backgroundColor: 'silver',
    width: 60,
    height: 30,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    padding: 5,
    textAlign: 'center',
    marginRight: 10,
  },
  tableCell: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
    padding: 5,
  },
  actionIconStyle: {
    alignSelf: 'center',
    marginLeft: 5
  },
});