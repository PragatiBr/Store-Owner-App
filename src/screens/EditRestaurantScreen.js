import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Dimensions, ScrollView } from 'react-native';
import Icon  from "react-native-vector-icons/FontAwesome";

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
    orderPrice: ''
  }

  render() {
    const { containerStyle, inputStyle, textStyle, redRectangle, greenRectangle, updateButtonstyle } = styles;
    return (
      <ScrollView horizontal>
        <View>
          <View style={containerStyle}>
            <Text style={textStyle}>*Store Name : </Text>
            <TextInput
              value={this.state.name}
              onChangeText={(name) => this.setState({ name })}
              style={inputStyle}
            />
          </View>
          <View style={containerStyle}>
            <Text style={textStyle}>*Description : </Text>
            <TextInput
              value={this.state.description}
              onChangeText={(description) => this.setState({ description })}
              style={inputStyle}
            />
          </View>
          <View style={containerStyle}>
            <Text style={textStyle}>*Image : </Text>
            <TextInput
              value={this.state.image}
              onChangeText={(image) => this.setState({ image })}
              style={inputStyle}
            />
          </View>
          <View style={containerStyle}>
            <Text style={textStyle}>*Approx Delivery Time : </Text>
            <TextInput
              value={this.state.deliveryTime}
              onChangeText={(deliveryTime) => this.setState({ deliveryTime })}
              style={inputStyle}
            />
          </View>
          <View style={containerStyle}>
            <Text style={textStyle}>*Approx Price for Two : </Text>
            <TextInput
              value={this.state.price}
              onChangeText={(price) => this.setState({ price })}
              style={inputStyle}
            />
          </View>
          <View style={containerStyle}>
            <Text style={textStyle}>*Full Address : </Text>
            <TextInput
              value={this.state.address}
              onChangeText={(address) => this.setState({ address })}
              style={inputStyle}
            />
          </View>
          <View style={containerStyle}>
            <Text style={textStyle}>*Pincode : </Text>
            <TextInput
              value={this.state.pincode}
              onChangeText={(pincode) => this.setState({ pincode })}
              style={inputStyle}
            />
          </View>
          <View style={containerStyle}>
            <Text style={textStyle}>*Land Mark : </Text>
            <TextInput
              value={this.state.landmark}
              onChangeText={(landmark) => this.setState({ landmark })}
              style={inputStyle}
            />
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 20 }}>
            <Text style={textStyle}>Latitude : </Text>
            <Text style={textStyle}>Longitude : </Text>
          </View>
          <View style={{ flexDirection: 'row',marginHorizontal: 10, marginTop: 20 }}>
            <TextInput style={inputStyle} />
            <TextInput style={inputStyle} />
          </View>
          <Text style={{ marginHorizontal: 5, color:'black', marginTop: 10 }}>You can use service like : URL </Text>
          <Text style={{ marginHorizontal: 5, color:'black', marginLeft: 30 }}>If you entered the invalid Latitude/Longitude the map system might crash with a white screen.</Text>
          <View style={containerStyle}>
            <Text style={textStyle}>Certificate/License Code : </Text>
            <TextInput
              value={this.state.licenseCode}
              onChangeText={(licenseCode) => this.setState({ licenseCode })}
              style={inputStyle}
            />
          </View>
          <View style={containerStyle}>
            <Text style={textStyle}>Store Charges (Packing/Extra) : </Text>
            <TextInput
              value={this.state.storeCharge}
              onChangeText={(storeCharge) => this.setState({ storeCharge })}
              style={inputStyle}
            />
          </View>
          <View style={containerStyle}>
            <Text style={textStyle}>Is Pure Veg? : </Text>
            <View style={greenRectangle}><Text style={textStyle}>YES</Text></View>
            <View style={redRectangle}><Text style={textStyle}>NO</Text></View>
          </View>
          <View style={containerStyle}>
            <Text style={textStyle}>Min Order Price : </Text>
            <TextInput
              value={this.state.orderPrice}
              onChangeText={(orderPrice) => this.setState({ orderPrice })}
              style={inputStyle}
            />
          </View>
          <View style={containerStyle}>
            <Text style={textStyle}>Automatic Scheduling : </Text>
            <View style={greenRectangle}><Text style={textStyle}>ON</Text></View>
            <View style={redRectangle}><Text style={textStyle}>OFF</Text></View>
          </View>
          <View style={containerStyle}>
            <Icon name="power-off" size={40} color='red' onPress={() => this.props.navigation.navigate('Store')} />
            <Text style={updateButtonstyle}>UPDATE</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    marginHorizontal: 10,
    marginTop: 20,
    flexDirection: 'row',
  },
  inputStyle: {
    borderWidth: 1,
    width: 250,
    height: 25,
    borderColor: 'black',
    marginHorizontal: 5,
    padding: 5,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  },
  redRectangle:{
    width: 20 * 2,
    height: 20,
    backgroundColor: 'red',
  },
  greenRectangle:{
    width: 20 * 2,
    height: 20,
    backgroundColor: 'lawngreen',
  },
  updateButtonstyle:{
    backgroundColor: 'black',
    color: 'white',
    textAlign:'center',
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
  }
})