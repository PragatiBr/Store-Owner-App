import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Divider } from "react-native-elements";

export default class ShiftInformation extends Component {
  constructor(props){
    super(props)
    this.state = {
      start: '',
      end: '',
      standard: '',
      cover: '',
    }
  }
  render(){
    const { 
      containerStyle, 
      textStyle, 
      buttonStyle, 
      shiftContainer, 
      headingContainer, 
      headingTextStyle, 
      inputStyle 
    } = styles;
    return(
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={containerStyle}>
          <Text style={textStyle}>SHIFT INFORMATION</Text>
          <Text style={buttonStyle} onPress={() => this.props.navigation.navigate('Store')} >UPDATE</Text>
        </View>
        <Divider width={5} color='rgba(192, 192, 192, 0.5)' />
        {/* Breakfast Section */}
        <View style={shiftContainer}>
          <Text style={{ color: 'black', paddingLeft: 10 }}>Breakfast*</Text>
          <View style={headingContainer}>
            <Text style={headingTextStyle}>Start Time:</Text>
            <Text style={headingTextStyle}>  End Time:</Text>
            <Text style={headingTextStyle}>Standard Duration:</Text>
            <Text style={headingTextStyle}>Max Cover:</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: 5}}>
            <TextInput
              value={this.state.start}
              onChangeText={(start) => this.setState(start)} 
              style={inputStyle}
            />
            <TextInput
              value={this.state.end}
              onChangeText={(end) => this.setState(end)} 
              style={inputStyle}
            />
            <TextInput
              value={this.state.standard}
              onChangeText={(standard) => this.setState(standard)} 
              style={inputStyle}
            />
            <TextInput
              value={this.state.cover}
              onChangeText={(cover) => this.setState(cover)} 
              style={inputStyle}
            />
          </View>
        </View>
        <Divider width={5} color='rgba(192, 192, 192, 0.5)' />
        {/* Lunch Section */}
        <View style={shiftContainer}>
          <Text style={{ color: 'black', paddingLeft: 10 }}>Lunch*</Text>
          <View style={headingContainer}>
            <Text style={headingTextStyle}>Start Time:</Text>
            <Text style={headingTextStyle}>  End Time:</Text>
            <Text style={headingTextStyle}>Standard Duration:</Text>
            <Text style={headingTextStyle}>Max Cover:</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: 5}}>
            <TextInput
              value={this.state.start}
              onChangeText={(start) => this.setState(start)} 
              style={inputStyle}
            />
            <TextInput
              value={this.state.end}
              onChangeText={(end) => this.setState(end)} 
              style={inputStyle}
            />
            <TextInput
              value={this.state.standard}
              onChangeText={(standard) => this.setState(standard)} 
              style={inputStyle}
            />
            <TextInput
              value={this.state.cover}
              onChangeText={(cover) => this.setState(cover)} 
              style={inputStyle}
            />
          </View>
        </View>
        <Divider width={5} color='rgba(192, 192, 192, 0.5)' />
        {/* Dinner Section */}
        <View style={shiftContainer}>
          <Text style={{ color: 'black', paddingLeft: 10 }}>Dinner*</Text>
          <View style={headingContainer}>
            <Text style={headingTextStyle}>Start Time:</Text>
            <Text style={headingTextStyle}>End Time:</Text>
            <Text style={headingTextStyle}>Standard Duration:</Text>
            <Text style={headingTextStyle}>Max Cover:</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: 5}}>
            <TextInput
              value={this.state.start}
              onChangeText={(start) => this.setState(start)} 
              style={inputStyle}
            />
            <TextInput
              value={this.state.end}
              onChangeText={(end) => this.setState(end)} 
              style={inputStyle}
            />
            <TextInput
              value={this.state.standard}
              onChangeText={(standard) => this.setState(standard)} 
              style={inputStyle}
            />
            <TextInput
              value={this.state.cover}
              onChangeText={(cover) => this.setState(cover)} 
              style={inputStyle}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textStyle :{
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonStyle:{
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'black',
    color: 'white',
    width: 100,
    height: 30,
    textAlign: 'center',
    padding: 5,
    fontWeight: '600',
    fontSize: 15,
  },
  shiftContainer: {
    backgroundColor: 'white',
    height: 130,
    paddingHorizontal: 5,
    marginTop: 5,
  },
  headingContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: 20,
  },
  headingTextStyle:{
    color: 'black',
    fontWeight:'bold',
    textAlign:'center',
  },
  inputStyle:{
    backgroundColor: 'rgba(192, 192, 192, 0.5)',
    width: 70,
    height: 35,
    padding: 5,
    alignSelf: 'center',
  }
});