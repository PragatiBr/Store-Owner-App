import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Divider } from "react-native-elements";

export default class OrdersScreen extends Component {
  render() {
    const { tableHeader, viewButton, tableCell } = styles;
    return (
      <ScrollView horizontal >
        <View>
          <Text style={[tableHeader, { marginLeft: 10, fontSize: 22 }]}>Orders</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={tableHeader}>Order Id</Text>
            <Text style={tableHeader}>Store Name</Text>
            <Text style={tableHeader}>Status</Text>
            <Text style={[tableHeader, {width: 100}]}>Total</Text>
            <Text style={[tableHeader, {width: 100}]}>Coupon</Text>
            <Text style={tableHeader}>Order Placed At</Text>
            <Ionicons name="chevron-down-circle-outline" size={20} color='black' />
          </View>
          <Divider width={1.5} />
          <View style={{ flexDirection: 'row', marginVertical: 15 }}>
            <Text style={tableCell}>OD-02-08-A7TP-8DL8BP3YA</Text>
            <Text style={[tableCell, {width: 170}]}>Mugen House All you can eat</Text>
            <Text style={[tableCell, {width: 150}]}>Completed Delivery By: Taseen</Text>
            <Text style={tableCell}>$ 133.8</Text>
            <Text style={tableCell}>123</Text>
            <Text style={tableCell}>ago</Text>
            <Text style={viewButton} onPress={() => this.props.navigation.navigate('OrderInvoice')}>VIEW <Ionicons name="document" size={20} color='white' /></Text>
          </View>
          <Divider width={1.5} />
          <View style={{ flexDirection: 'row', marginVertical: 15 }}>
            <Text style={tableCell}>OD-02-08-A7TP-8DL8BP3YA</Text>
            <Text style={[tableCell, {width: 170}]}>Mugen House All you can eat</Text>
            <Text style={[tableCell, {width: 150}]}>Completed Delivery By: Taseen</Text>
            <Text style={tableCell}>$ 133.8</Text>
            <Text style={tableCell}>123</Text>
            <Text style={tableCell}>ago</Text>
            <Text style={viewButton} onPress={() => this.props.navigation.navigate('OrderInvoice')}>VIEW <Ionicons name="document" size={20} color='white' /></Text>
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
    width: 150,
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
  tableCell:{
    color: 'black',
    width: 100,
    fontSize: 15,
    marginRight: 10,
  }
});