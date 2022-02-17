import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions, FlatList } from 'react-native'
import { Divider } from "react-native-elements";
import BackgroundImage from "../components/BackgroundImage";
import SideMenuBar from "../components/SideMenuBar";

export default class DashboardScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prepareOrderData: [
        {
          id: 1,
          orderId: 'OD-356-GHZ',
          price: '$40',
          placedTime: '3:40',
          acceptedTime: '3:41'
        },
        {
          id: 2,
          orderId: 'OD-854-DGH',
          price: '$30',
          placedTime: '6:40',
          acceptedTime: '6:41'
        },
        {
          id: 3,
          orderId: 'OD-741-SDF',
          price: '$35',
          placedTime: '2:40',
          acceptedTime: '2:41'
        },
      ],
      leftSideData: [
        {
          id: 1,
          image: require('../assets/images/shop-store.jpg'),
          count: '6',
        },
        {
          id: 2,
          image: require('../assets/images/shopping-cart.jpg'),
          count: '3',
        },
        {
          id: 3,
          image: require('../assets/images/sold-icon.jpg'),
          count: '18',
        },
        {
          id: 4,
          image: require('../assets/images/earning.jpg'),
          count: '$1500',
        },
      ]
    }
  }

  renderData = (itemData) => {
    return (
      <View style={styles.containerStyle}>
        <Image source={itemData.item.image} style={styles.imageStyle} />
        <Text style={styles.textStyle}>{itemData.item.count}</Text>
      </View>
    );
  }

  renderPrepareOrder = (itemData) => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
        <Text style={styles.tableText} onPress={() => this.props.navigation.push('OrderInvoice')}>{itemData.item.orderId}</Text>
        <Text style={styles.tableText}>{itemData.item.price}</Text>
        <Text style={styles.tableText}>{itemData.item.placedTime}</Text>
        <Text style={styles.tableText}>{itemData.item.acceptedTime}</Text>
      </View>
    );
  }

  render() {
    const {
      headingText,
      tableText,
      redRectangle,
      greenRectangle,
    } = styles;

    return (
      <View style={{ flexDirection: 'row', height: Dimensions.get('window').height  }}>
        <BackgroundImage />
        <SideMenuBar onPress={this.props.navigation} />
        {/* Left Side Section */}
        <View style={{ marginTop: 50 }}>
          <FlatList 
            data={this.state.leftSideData}
            keyExtractor={item => item.id}
            renderItem={itemData => this.renderData(itemData)}
          />
        </View>
        <Divider orientation="vertical" width={2} color='black' style={{ marginLeft: 20, }} />
        {/* New Orders Section */}
        <View style={{ marginLeft: 10 }}>
          <Text style={headingText}>
            NEW ORDERS
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
            <Text style={tableText}>ORDER ID</Text>
            <View style={greenRectangle} />
            <View style={redRectangle} />
            <Text style={tableText}>RESTAURANT NAME</Text>
            <Text style={tableText}>PRICE</Text>
            <Text style={tableText}>STATUS</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
            <Text style={tableText}>ORDER ID</Text>
            <View style={greenRectangle} />
            <View style={redRectangle} />
            <Text style={tableText}>RESTAURANT NAME</Text>
            <Text style={tableText}>PRICE</Text>
            <Text style={tableText}>STATUS</Text>
          </View>
          <Divider width={1} color='black' style={{ marginTop: 300 }} />
          {/* Preparing Order Section */}
          <Text style={headingText}>
            PREPARING ORDERS
          </Text>
          <FlatList
            data={this.state.prepareOrderData}
            keyExtractor={item => item.id}
            renderItem={item => this.renderPrepareOrder(item)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 60,
    width: 60,
    alignSelf: 'flex-end',
  },
  containerStyle: {
    width: 180,
    height: 110,
    backgroundColor: 'silver',
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between'
  },
  textStyle: {
    fontSize: 30,
    fontWeight: '600',
    color: 'black',
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
  },
  separator: {
    marginLeft: 15,
  },
  headingText: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingHorizontal: 200,
    paddingTop: 10,
  },
  tableText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  redRectangle: {
    width: 20 * 2,
    height: 20,
    backgroundColor: 'red',
    marginLeft: -50,
  },
  greenRectangle: {
    width: 20 * 2,
    height: 20,
    backgroundColor: 'green',
  },
});