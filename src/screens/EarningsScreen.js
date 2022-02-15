import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class EarningsScreen extends Component {
  render() {
    const { iconStyle, headerContainerStyle, textStyle, bodyContainer, bodyText, tableContainer } = styles;
    return (
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
          <View style={headerContainerStyle}>
            <Text style={textStyle}>NET EARNINGS</Text>
            <Text style={textStyle}>[BEFORE COMMISION]</Text>
            <Text style={[textStyle, {textAlign:'center', paddingTop: 10, fontSize: 25}]}>$0</Text>
          </View>
          <View style={headerContainerStyle}>
            <Text style={textStyle}>YOUR BALANCE</Text>
            <Text style={textStyle}>[AFTER COMMISION]</Text>
            <Text style={[textStyle, {textAlign:'center', paddingTop: 10, fontSize: 25}]}>$0</Text>
          </View>
          <View style={headerContainerStyle}>
            <Text style={textStyle}>TOTAL VALUE OF SALES</Text>
            <Text style={textStyle}>[BEFORE COMMISION]</Text>
            <Text style={[textStyle, {textAlign:'center', paddingTop: 10, fontSize: 25}]}>$0</Text>
          </View>
        </View>
        <View style={bodyContainer}>
          <Text style={bodyText}>Request For Payout</Text>
          <Text style={[textStyle, {paddingLeft: 10}]}>Your current balance is $0. You will be eligible for a payout when your balance amount is surpasses $150</Text>
        </View>
        <View style={tableContainer}>
          <Text style={textStyle}>Amount</Text>        
          <Text style={textStyle}>Status</Text>        
          <Text style={textStyle}>Transaction Mode</Text>        
          <Text style={textStyle}>Transaction Id</Text>        
          <Text style={textStyle}>Message</Text>        
          <Text style={textStyle}>Created</Text>        
          <Text style={textStyle}>Updated</Text>        
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle: {
    backgroundColor: 'black',
    color: 'white',
    height: 35,
    marginTop: 45,
    padding: 5
  },
  headerContainerStyle:{
    backgroundColor:'silver',
    height: 120,
    width:250,
    padding: 10,
    marginLeft:35,
    marginTop: 20,
  },
  textStyle:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'black',
  },
  bodyContainer:{
    backgroundColor:'silver',
    marginHorizontal:15,
    height: 200,
    marginTop: 50,
  },
  bodyText:{
    fontSize:30,
    fontWeight:'bold',
    color:'black',
    paddingVertical: 20,
    paddingLeft: 20,
  },
  tableContainer:{
    flexDirection:'row',
    borderWidth: 1,
    marginHorizontal: 15,
    marginTop: 30,
    justifyContent: 'space-between',
    height: 300,
    paddingTop: 10,
    paddingHorizontal: 5,
  }
});