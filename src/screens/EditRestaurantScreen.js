import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import BackgroundImage from "../components/BackgroundImage";
import Input from "../components/Input";

export default class EditRestaurant extends Component {

  state = {
    name: '',
    description: '',
    image: '',
    deliveryTime: '',
    price: '',
    address: '',
    pincode: '',
    landmark: '',
    latitude: '',
    longitude: '',
    licenseCode: '',
    storeCharge: '',
    orderPrice: '',
  }

  render() {
    const { textStyle, redRectangle, greenRectangle, updateButtonstyle, iconStyle } = styles;
    return (
      <View>
        <BackgroundImage />
        <Input 
          label="*Store Name :"
          value={this.state.name}
          onChangeText={(name) => this.setState({ name })}
        />
        <Input 
          label="*Description : "
          value={this.state.description}
          onChangeText={(description) => this.setState({ description })}
        />
        <Input 
          label="*Image : "
          value={this.state.image}
          onChangeText={(image) => this.setState({ image })}
        />
        <Input 
          label="*Apx Delivery Time : "
          value={this.state.deliveryTime}
          onChangeText={(deliveryTime) => this.setState({ deliveryTime })}
        />
        <Input 
          label="*Apx Price for Two : "
          value={this.state.price}
          onChangeText={(price) => this.setState({ price })}
        />
        <Input 
          label="*Full Address : "
          value={this.state.address}
          onChangeText={(address) => this.setState({ address })}
        />
        <Input 
          label="*Pincode : "
          value={this.state.pincode}
          onChangeText={(pincode) => this.setState({ pincode })}
        />
        <Input 
          label="*Land Mark : "
          value={this.state.landmark}
          onChangeText={(landmark) => this.setState({ landmark })}
        />
        <View style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          marginTop: 20,
          justifyContent: 'space-between',
        }}>
          <Text style={textStyle}>Latitude : </Text>
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center',
            marginRight: 310
          }}>
            Longitude :
          </Text>
        </View>
        <View style={{
          flexDirection: 'row',
          marginHorizontal: 5,
          marginTop: 10,
          justifyContent: 'space-between',
        }}>
          <Input
            value={this.state.latitude}
            onChangeText={(latitude) => this.setState({ latitude })}
          />
          <Input
            value={this.state.longitude}
            onChangeText={(longitude) => this.setState({ longitude })}
          />
        </View>
        <Text style={{ marginHorizontal: 10, color: 'black', marginTop: 10 }}>You can use service like :
          <Text style={{ color: 'silver' }}>  URL</Text>
        </Text>
        <Text style={{ marginHorizontal: 10, color: 'black' }}>If you entered the invalid Latitude/Longitude the map system might crash with a white screen.</Text>
        <Input 
          label="Store Charges (Packing/Extra) : "
          value={this.state.storeCharge}
          onChangeText={(storeCharge) => this.setState({ storeCharge })}
        />
        <Input 
          label="Min Order Price : "
          value={this.state.orderPrice}
          onChangeText={(orderPrice) => this.setState({ orderPrice })}
        />
        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
          <Text style={textStyle}>Is Pure Veg? : </Text>
          <View style={greenRectangle}><Text style={textStyle}>YES</Text></View>
          <View style={redRectangle}><Text style={textStyle}>NO</Text></View>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
          <Text style={textStyle}>Automatic Scheduling : </Text>
          <View style={greenRectangle}><Text style={textStyle}>ON</Text></View>
          <View style={redRectangle}><Text style={textStyle}>OFF</Text></View>
        </View>
        <View style={{ marginHorizontal: 10, marginHorizontal: 25, flexDirection: 'row', marginVertical: 25, }}>
          <Icon name="power-off" size={38} color='red' style={iconStyle} onPress={() => this.props.navigation.goBack('Home')} />
          <Text onPress={() => this.props.navigation.goBack('Home')} style={updateButtonstyle}>UPDATE</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  },
  redRectangle: {
    width: 20 * 2,
    height: 20,
    backgroundColor: 'red',
  },
  greenRectangle: {
    width: 20 * 2,
    height: 20,
    backgroundColor: 'lawngreen',
    marginLeft: 20,
  },
  updateButtonstyle: {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    padding: 8,
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: Dimensions.get('window').width - 200,
    fontWeight: 'bold',
    width: 100,
    height: 40,
    fontSize: 18,
  },
  iconStyle: {
    backgroundColor: 'rgba(192,192,192,0.3)',
    width: 50,
    padding: 7,
    alignItems: 'center'
  },
})