import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Divider } from "react-native-elements";

export default class DashboardScreen extends Component {
  render() {
    const { 
      iconStyle, 
      imageStyle, 
      containerStyle, 
      textStyle, 
      headingText, 
      tableText, 
      redRectangle,
      greenRectangle, 
    } = styles;
    return (
      <ScrollView horizontal width={Dimensions.get('screen').width}>
        <Icon name="menu" size={35} style={iconStyle} />
          {/* Left Side Section */}
          <View style={{ marginTop: 20 }}>
            <View style={containerStyle}>
              <Image source={require('../assets/images/shop-store.jpg')} style={imageStyle} />
              <Text style={textStyle}>6</Text>
            </View>
            <View style={containerStyle}>
              <Image source={require('../assets/images/shopping-cart.jpg')} style={imageStyle} />
              <Text style={textStyle}>3</Text>
            </View>
            <View style={containerStyle}>
              <Image source={require('../assets/images/sold-icon.jpg')} style={imageStyle} />
              <Text style={textStyle}>18</Text>
            </View>
            <View style={containerStyle}>
              <Image source={require('../assets/images/earning.jpg')} style={imageStyle} />
              <Text style={textStyle}>$1500</Text>
            </View>
          </View>
          <Divider orientation="vertical" width={1} style={{marginLeft: 20}} color='black' height={Dimensions.get('screen').height} />
          {/* New Orders Section */}
          <View style={{ flexDirection:'column' }}>
            <Text style={headingText}>
              NEW ORDERS
            </Text>
            <View style={{ flexDirection: 'row', justifyContent:'space-between', paddingTop: 20 }}>
              <Text style={tableText}>ORDER ID</Text>
              <View style={greenRectangle} />
              <View style={redRectangle} />
              <Text style={tableText}>RESTAURANT NAME</Text>
              <Text style={tableText}>PRICE</Text>
              <Text style={tableText}>STATUS</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent:'space-between', paddingTop: 20 }}>
              <Text style={tableText}>ORDER ID</Text>
              <View style={greenRectangle} />
              <View style={redRectangle} />
              <Text style={tableText}>RESTAURANT NAME</Text>
              <Text style={tableText}>PRICE</Text>
              <Text style={tableText}>STATUS</Text>
            </View>
            <Divider orientation="horizontal" width={1} color='black' style={{ marginTop: 250}} />
            {/* Preparing Order Section */}
            <Text style={headingText}>
              PREPARING ORDERS
            </Text>
            <View style={{ flexDirection: 'row', justifyContent:'space-between', paddingTop: 20 }}>
              <Text style={tableText} onPress={() => this.props.navigation.navigate('OrderInvoice')}>ORDER ID</Text>
              <Text style={tableText}>PRICE</Text>
              <Text style={tableText}>TIME ORDER PLACED</Text>
              <Text style={tableText}>TIME ORDER ACCEPTED</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent:'space-between', paddingTop: 20 }}>
              <Text style={tableText} onPress={() => this.props.navigation.navigate('OrderInvoice')}>ORDER ID</Text>
              <Text style={tableText}>PRICE</Text>
              <Text style={tableText}>TIME ORDER PLACED</Text>
              <Text style={tableText}>TIME ORDER ACCEPTED</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent:'space-between', paddingTop: 20 }}>
              <Text style={tableText} onPress={() => this.props.navigation.navigate('OrderInvoice')}>ORDER ID</Text>
              <Text style={tableText}>PRICE</Text>
              <Text style={tableText}>TIME ORDER PLACED</Text>
              <Text style={tableText}>TIME ORDER ACCEPTED</Text>
            </View>
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle: {
    backgroundColor: 'black',
    color: 'white',
    position: 'absolute',
  },
  imageStyle: {
    height: 80,
    width: 80,
    alignSelf: 'flex-end',
  },
  containerStyle: {
    width: 200,
    height: 110,
    backgroundColor: 'silver',
    flexDirection: 'row',
    marginTop: 40,
    marginLeft: 10,
    justifyContent: 'space-between'
  },
  textStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
  },
  separator: {
    marginLeft: 20,
  },
  headingText:{
    fontSize: 25, 
    color: 'black', 
    fontWeight: 'bold', 
    alignItems: 'center', 
    paddingHorizontal: 200
  },
  tableText:{
    color:'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  redRectangle:{
    width: 20 * 2,
    height: 20,
    backgroundColor: 'red',
  },
  greenRectangle:{
    width: 20 * 2,
    height: 20,
    backgroundColor: 'green',
    marginLeft: -45,
  }
});