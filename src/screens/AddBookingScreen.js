import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BackgroundImage from "../components/BackgroundImage";
import Input from "../components/Input";

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
      <View>
        <BackgroundImage />
        <View style={styles.containerStyle}>
          <Text style={styles.textStyle}>Add New Booking</Text>
          <Icon name="clear" size={25} onPress={() => this.props.navigation.navigate('Bookings')} />
        </View>
        <Input 
          label="*Booking store: "
          placeholder="Enter Store Name"
          value={this.state.store}
          onChangeText={store => this.setState({store})}
        />
        <Input 
          label="*No. of Packs: "
          placeholder="Enter Pax"
          value={this.state.pax}
          onChangeText={pax => this.setState({ pax })}
        />
        <Input 
          label="*Booking Date: "
          placeholder="Enter Date"
          value={this.state.date}
          onChangeText={date => this.setState({ date })}
        />
        <Input 
          label="*Mobile Number: "
          placeholder="Enter Number"
          value={this.state.phone}
          onChangeText={phone => this.setState({ phone })}
        />
        <Input 
          label="*Email Address: "
          placeholder="Enter Email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <Input 
          label="*First Name: "
          placeholder="Enter First Name"
          value={this.state.fname}
          onChangeText={fname => this.setState({ fname })}
        />
        <Input 
          label="*Last Name: "
          placeholder="Enter Last Name"
          value={this.state.lname}
          onChangeText={lname => this.setState({ lname })}
        />
        <Input 
          label="Date of Birth: "
          placeholder="Enter DoB"
          value={this.state.dob}
          onChangeText={dob => this.setState({ dob })}
        />
        <Input 
          label="Comments: "
          placeholder="Enter Comments"
          value={this.state.comments}
          onChangeText={comments => this.setState({ comments })}
        />
        <Icon name="done" size={25} color='white' style={styles.doneIcon} onPress={() => this.props.navigation.navigate('Bookings')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  doneIcon:{
    backgroundColor:'deepskyblue',
    borderRadius: 20,
    width: 90,
    alignSelf: 'flex-end',
    paddingHorizontal: 35,
    paddingVertical:5,
    marginTop: 15,
    marginRight:10,
  },
});