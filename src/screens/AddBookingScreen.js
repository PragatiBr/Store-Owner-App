import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BackgroundImage from "../components/BackgroundImage";

export default class AddBooking extends Component{
  constructor(props){
    super(props)
    this.state = {
      store: '',
      pax: '',
      date: '',
      phone: '',
      email: '',
      fname: '',
      lname: '',
      dob : '',
      comments: '',
    }
  }
  render(){
    return(
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <BackgroundImage />
        <View style={styles.containerStyle}>
          <Text style={styles.textStyle}>Add New Booking</Text>
          <Icon name="clear" size={25} onPress={() => this.props.navigation.navigate('Bookings')} />
        </View>
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}>*Booking's Store: </Text>
          <TextInput
            placeholder="Enter Store Name"
            value={this.state.store}
            onChangeText={store => this.setState({ store })}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}>*No. of Packs: </Text>
          <TextInput
            placeholder="Enter Pax"
            value={this.state.pax}
            onChangeText={pax => this.setState({ pax })}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}>*Booking Date: </Text>
          <TextInput
            placeholder="Enter Date"
            value={this.state.date}
            onChangeText={date => this.setState({ date })}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}>*Mobile Number: </Text>
          <TextInput
            placeholder="Enter Number"
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}>*Email Address: </Text>
          <TextInput
            placeholder="Enter Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}>*First Name: </Text>
          <TextInput
            placeholder="Enter First Name"
            value={this.state.fname}
            onChangeText={fname => this.setState({ fname })}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}>*Last Name: </Text>
          <TextInput
            placeholder="Enter Last Name"
            value={this.state.lname}
            onChangeText={lname => this.setState({ lname })}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}>Date of Birth: </Text>
          <TextInput
            placeholder="Enter DoB"
            value={this.state.dob}
            onChangeText={dob => this.setState({ dob })}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}>Comments: </Text>
          <TextInput
            placeholder="Enter Comments"
            value={this.state.comments}
            onChangeText={comments => this.setState({ comments })}
            style={styles.inputStyle}
          />
        </View>
          <Icon name="done" size={25} color='white' style={styles.doneIcon} onPress={() => this.props.navigation.navigate('Bookings')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  inputStyle: {
    borderWidth: 1,
    height: 35,
    padding: 5,
    width: 350,
    borderRadius: 5,
    borderColor: 'silver',
  },
  labelStyle: {
    color: 'black',
    marginTop: 5,
    fontSize: 18,
  },
  doneIcon:{
    backgroundColor:'deepskyblue',
    borderRadius: 20,
    width: 80,
    alignSelf: 'flex-end',
    paddingHorizontal: 25,
    paddingVertical:5,
    marginTop: 10,
    marginRight:10,
  }
});