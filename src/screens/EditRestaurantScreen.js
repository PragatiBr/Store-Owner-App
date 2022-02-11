import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Dimensions, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

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
    const { containerStyle, inputStyle, textStyle, redRectangle, greenRectangle, updateButtonstyle, iconStyle } = styles;
    return (
      <ScrollView>
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
              style={{ 
                borderWidth: 1, 
                width: 150, 
                height: 25, 
                borderColor: 'black', 
                marginLeft: Dimensions.get('window').width - 320, 
                padding: 5, 
              }}
            />
          </View>
          <View style={containerStyle}>
            <Text style={textStyle}>*Apx Delivery Time : </Text>
            <TextInput
              value={this.state.deliveryTime}
              onChangeText={(deliveryTime) => this.setState({ deliveryTime })}
              style={inputStyle}
            />
          </View>
          <View style={containerStyle}>
            <Text style={textStyle}>*Apx Price for Two : </Text>
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
              style={{ 
                borderWidth: 1, 
                width: 200, 
                height: 25, 
                borderColor: 'black', 
                marginLeft: Dimensions.get('window').width - 320, 
                padding: 5, 
              }}
            />
          </View>
          <View style={containerStyle}>
            <Text style={textStyle}>*Pincode : </Text>
            <TextInput
              value={this.state.pincode}
              onChangeText={(pincode) => this.setState({ pincode })}
              style={{ 
                borderWidth: 1, 
                width: 210, 
                height: 25, 
                borderColor: 'black', 
                marginLeft: Dimensions.get('window').width - 300, 
                padding: 5, 
              }}
            />
          </View>
          <View style={containerStyle}>
            <Text style={textStyle}>*Land Mark : </Text>
            <TextInput
              value={this.state.landmark}
              onChangeText={(landmark) => this.setState({ landmark })}
              style={{ 
                borderWidth: 1, 
                width: 210, 
                height: 25, 
                borderColor: 'black', 
                marginLeft: Dimensions.get('window').width - 320, 
                padding: 5, 
              }}
            />
          </View>
          <View style={{ 
            flexDirection: 'row', 
            marginHorizontal: 10, 
            marginTop: 20, 
            width: Dimensions.get('window').width / 2, 
            justifyContent: 'space-between',  
          }}>
            <Text style={textStyle}>Latitude : </Text>
            <Text style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
              textAlign: 'center',
              paddingLeft: 110,
            }}>
              Longitude : 
            </Text>
          </View>
          <View style={{ 
            flexDirection: 'row',
            marginHorizontal: 5, 
            marginTop: 10,
            width: Dimensions.get('window').width / 2, 
            justifyContent: 'space-between', 
          }}>
            <TextInput 
              style={{ 
                borderWidth: 1, 
                width: 150, 
                height: 25, 
                borderColor: 'black', 
                marginRight: Dimensions.get('window').width - 300, 
                padding: 5, 
              }}
              value={this.state.latitude}
              onChangeText={(latitude) => this.setState({latitude})} 
            />
            <TextInput 
            style={{ 
              borderWidth: 1, 
              width: 170, 
              height: 25, 
              borderColor: 'black', 
              marginLeft: Dimensions.get('window').width - 400, 
              padding: 5, 
            }}
            value={this.state.longitude}
            onChangeText={(longitude) => this.setState({longitude})} 
            />
          </View>
          <Text style={{ marginHorizontal: 10, color:'black', marginTop: 10 }}>You can use service like : 
            <Text style={{ color: 'silver' }}>  URL</Text>
          </Text>
          <Text style={{ marginHorizontal: 10, color:'black' }}>If you entered the invalid Latitude/Longitude the map system might crash with a white screen.</Text>
          <View style={containerStyle}>
            <Text style={textStyle}>Certificate/License Code : </Text>
            <TextInput
              value={this.state.licenseCode}
              onChangeText={(licenseCode) => this.setState({ licenseCode })}
              style={{ 
                borderWidth: 1, 
                width: 170, 
                height: 25, 
                borderColor: 'black', 
                marginLeft: Dimensions.get('window').width - 350, 
                padding: 5, 
              }}
            />
          </View>
          <View style={containerStyle}>
            <Text style={textStyle}>Store Charges (Packing/Extra) : </Text>
            <TextInput
              value={this.state.storeCharge}
              onChangeText={(storeCharge) => this.setState({ storeCharge })}
              style={{ 
                borderWidth: 1, 
                width: 170, 
                height: 25, 
                borderColor: 'black', 
                marginLeft: Dimensions.get('window').width - 340, 
                padding: 5, 
              }}
            />
          </View>
          <View style={containerStyle}>
            <Text style={textStyle}>Min Order Price : </Text>
            <TextInput
              value={this.state.orderPrice}
              onChangeText={(orderPrice) => this.setState({ orderPrice })}
              style={{ 
                borderWidth: 1, 
                width: 180, 
                height: 25, 
                borderColor: 'black', 
                marginLeft: Dimensions.get('window').width - 300, 
                padding: 5, 
              }}
            />
          </View>
          <View style={containerStyle}>
            <Text style={textStyle}>Is Pure Veg? : </Text>
            <View style={greenRectangle}><Text style={textStyle}>YES</Text></View>
            <View style={redRectangle}><Text style={textStyle}>NO</Text></View>
          </View>
          <View style={containerStyle}>
            <Text style={textStyle}>Automatic Scheduling : </Text>
            <View style={greenRectangle}><Text style={textStyle}>ON</Text></View>
            <View style={redRectangle}><Text style={textStyle}>OFF</Text></View>
          </View>
          <View style={{ marginHorizontal: 10, marginHorizontal: 25, flexDirection: 'row', marginVertical:25,  }}>
            <Icon name="power-off" size={38} color='red' style={iconStyle} onPress={() => this.props.navigation.navigate('Store')} />
            <Text onPress={() => this.props.navigation.navigate('Home')} style={updateButtonstyle}>UPDATE</Text>
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
    width: Dimensions.get('window').width / 2,
    alignItems: 'center'
  },
  inputStyle: {
    borderWidth: 1,
    width: 200,
    height: 25,
    borderColor: 'black',
    marginLeft: Dimensions.get('window').width - 350,
    padding: 5,
  },
  textStyle: {
    fontSize: 15,
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
    marginLeft: Dimensions.get('window').width - 350,
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