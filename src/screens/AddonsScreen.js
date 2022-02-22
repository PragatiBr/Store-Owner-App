import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Divider } from "react-native-elements";
import BackgroundImage from "../components/BackgroundImage";
import ItemMenuHeader from "../components/ItemMenuHeader";

export default class Addons extends Component{
  constructor(props){
    super(props)
    this.state = { 
      search: '',
    }
  }
  render(){
    const { containerStyle, textStyle, tableCellStyle } = styles 
    return(
      <View>
        <BackgroundImage />
        <ItemMenuHeader 
          value={this.state.search}
          placeholder="Search"
          onChangeText={search => this.setState({ search })}
          onPress={() => this.props.navigation.navigate('AddAddons')}
        />
        <Divider width={3} color='rgba(192,192,192,0.5)' />
          <View>
            <View style={containerStyle}>
              <Text style={[textStyle, {width: 150}]}>Name</Text>
              <Text style={[textStyle, {width: 100}]}>Price</Text>
              <Text style={[textStyle, {width: 200}]}>Addons Category</Text>
              <Text style={[textStyle, {width: 150}]}>Created At</Text>
              <Ionicons name="chevron-down-circle-outline" size={25} color='black' />
            </View>
            <Divider width={1} color='rgba(192,192,192,0.5)' />
            <View style={containerStyle}>
              <Text style={tableCellStyle}>Coca Cola</Text>
              <Text style={[tableCellStyle, { width: 100}]}>20</Text>
              <Text style={[tableCellStyle, { width: 200}]}>Drink</Text>
              <Text style={tableCellStyle}>3:14 10/02/2022</Text>
              <View style={{ flexDirection:'row'}}>
                <Icon name="edit" size={30} />
                <Icon name="delete" size={30} color='red' />
              </View> 
            </View>
            <Divider width={1} color='rgba(192,192,192,0.5)' />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  textStyle:{
    fontSize:20,
    fontWeight:'bold',
    color:'black',
  },
  tableCellStyle:{
    fontSize: 15,
    color:'black',
    width: 150,
  }
});