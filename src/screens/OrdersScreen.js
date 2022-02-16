import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Divider } from "react-native-elements";
import SideMenuBar from "../components/SideMenuBar";

export default class OrdersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  }
  render() {
    const { tableHeader, viewButton, tableCell, inputStyle } = styles;
    return (
      <ScrollView>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <SideMenuBar onPress={this.props.navigation} />
            <TextInput
              value={this.state.search}
              placeholder="Search Order Id"
              onChangeText={serach => this.setState({ serach })}
              style={inputStyle}
            />
          </View>
          <View style={{marginTop: 10}}>
            <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
              <Text style={tableHeader}>Order Id</Text>
              <Text style={tableHeader}>Restaurant</Text>
              <Text style={tableHeader}>Status</Text>
              <Text style={[tableHeader, { width: 100 }]}>Total</Text>
              <Text style={[tableHeader, { width: 100 }]}>Coupon</Text>
              <Text style={tableHeader}>Order Placed At</Text>
              <Ionicons name="chevron-down-circle-outline" size={20} color='black' style={{marginTop: 10}} />
            </View>
            <Divider width={1.5} />
            <View style={{ flexDirection: 'row', marginVertical: 15, justifyContent:'space-between' }}>
              <Text style={tableCell}>#WHZ56</Text>
              <Text style={[tableCell, { width: 170, paddingLeft: 40 }]}>Scootz Cafe</Text>
              <Text style={[tableCell, { width: 150 }]}>Order Placed</Text>
              <Text style={tableCell}>$ 133.8</Text>
              <Text style={tableCell}>None</Text>
              <Text style={tableCell}>1:25</Text>
              <Text style={viewButton} onPress={() => this.props.navigation.push('OrderInvoice')}>VIEW <Ionicons name="document" size={20} color='white' /></Text>
            </View>
            <Divider width={1.5} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  tableHeader: {
    color: 'black',
    fontWeight: '700',
    width: 120,
    fontSize: 18,
    marginVertical: 10,
  },
  viewButton: {
    backgroundColor: 'slateblue',
    width: 70,
    height: 30,
    color: 'white',
    borderRadius: 5,
    textAlign: 'center',
    padding: 3,
    fontWeight: 'bold'
  },
  tableCell: {
    color: 'black',
    width: 100,
    fontSize: 15,
    marginRight: 10,
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 7,
    width: 400,
    height: 40,
    paddingLeft: 20,
    marginHorizontal: 30,
    marginTop: 15
  },
});