import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import DotIcon from 'react-native-vector-icons/Octicons';
import BackgroundImage from "../components/BackgroundImage";
import SideMenuBar from "../components/SideMenuBar";

export default class StoresScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: 1,
          image: require('../assets/images/Est-Ovest-store.png'),
        },
        {
          id: 2,
          image: require('../assets/images/Fasta-Pasta-Store.png'),
        },
        {
          id: 3,
          image: require('../assets/images/Greek-store.png'),
        },
        {
          id: 4,
          image: require('../assets/images/radisson-store.jpeg'),
        },
        {
          id: 5,
          image: require('../assets/images/sayaji-store.png'),
        },
      ]
    }
  }

  renderComponent = (itemData) => {
    return (
      <View style={styles.containerStyle}>
        
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', { image: itemData.item.image })}>
          <ImageBackground source={itemData.item.image} style={styles.imageStyle}>
            <DotIcon name="primitive-dot" size={35} color="green" style={styles.dotIconStyle} />
          </ImageBackground>
        </TouchableOpacity>
        <Text onPress={() => this.props.navigation.navigate('Edit')} style={styles.textStyle}>EDIT</Text>
        <Text onPress={() => this.props.navigation.navigate('TableShift')} style={styles.tableShiftStyle}>TABLE & SHIFTS</Text>
        <Text style={styles.textStyle}>SETTINGS</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        <BackgroundImage />
        <SideMenuBar onPress={this.props.navigation} />
        <View style={{ marginTop: 40 }}>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.id}
            renderItem={item => this.renderComponent(item)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    marginLeft: 50,
    justifyContent: 'space-between',
    height: 150,
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  dotIconStyle: {
    right: 5,
    top: -5,
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  textStyle: {
    backgroundColor: 'lightsteelblue',
    color: 'white',
    fontSize: 20,
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 25,
    width: 130,
    height: 50,
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
    borderColor: 'lightsteelblue',
    fontWeight: 'bold',
  },
  tableShiftStyle: {
    backgroundColor: 'lightsteelblue',
    color: 'white',
    fontSize: 20,
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 25,
    width: 220,
    height: 50,
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
    borderColor: 'lightsteelblue',
    fontWeight: 'bold',
  },
});