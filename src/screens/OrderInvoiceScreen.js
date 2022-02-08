import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class OrderInvoice extends Component {
  render (){
    const { headerView, iconStyle, textStyle, orderDetailStyle } = styles;
    return (
      <View>
        <View style={headerView}>
          <Text style={textStyle}>Order Id</Text>
          <Text style={{ borderWidth: 1, width: 60, textAlign: 'center', color: 'black', fontWeight: '600', paddingTop: 5, fontSize: 18 }}>PRINT</Text>
          <Icon name="clear" size={30} style={iconStyle} onPress={() => this.props.navigation.navigate('Dashboard')} />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={orderDetailStyle}>Order Placed: </Text>
          <Separator />
          <Text style={orderDetailStyle}>Customer Details:</Text>
          <Text style={orderDetailStyle}>Name : Pranam R</Text>
          <Text style={orderDetailStyle}>Email : paramR@gmail.com</Text>
          <Text style={orderDetailStyle}>Contact No.: 90123456789</Text>
          <Separator />
          <Text style={orderDetailStyle}>Store Name : Scootz Cafe</Text>
          <Text style={orderDetailStyle}>Status: Delivery Assigned</Text>
          <Text style={orderDetailStyle}>Deliver By : xyz</Text>
          <Text style={orderDetailStyle}>Address : acsfhjkfhgihgljhl</Text>
          <Text style={orderDetailStyle}>Payment Mode: Cash</Text>
          <Text style={orderDetailStyle}>Comment / Suggestion : </Text>
          <Separator />
          <Text style={orderDetailStyle}>1x Scootz Brakiee for 2 $ 40</Text>
          <Text style={orderDetailStyle}>Coupon : None</Text>
          <Text style={orderDetailStyle}>Store Charges : $ </Text>
          <Text style={orderDetailStyle}>Tax : 3.64%</Text>
          <Text style={orderDetailStyle}>Total : $ 40</Text>
        </View>
      </View>
    );
  }
}
const Separator = () => (
  <View style={styles.separator} />
);

const styles = StyleSheet.create({
  headerView:{
    backgroundColor: 'grey',
    flexDirection: 'row',
    width: Dimensions.get('screen').width,
    height:65,
    paddingHorizontal: 15,
    paddingTop: 30,
    justifyContent:'space-between',
  },
  iconStyle:{
    position:'absolute',
    backgroundColor: 'red',
  },
  textStyle:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  orderDetailStyle:{
    paddingHorizontal: 15,
    color: 'black',
    fontWeight: '700',
    fontSize: 15,
  }
});