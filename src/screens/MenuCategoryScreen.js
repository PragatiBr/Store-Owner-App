import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Divider } from "react-native-elements";
import BackgroundImage from "../components/BackgroundImage";
import ItemMenuHeader from "../components/ItemMenuHeader";

export default class MenuCategory extends Component{
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
          onPress={() => this.props.navigation.navigate('AddMenu')}
        />
        <Divider width={3} color='rgba(192,192,192,0.5)' />
        <View>
            <View style={containerStyle}>
              <Text style={[textStyle, {width: 150}]}>Category Id</Text>
              <Text style={[textStyle, {width: 150}]}>Name</Text>
              <Text style={[textStyle, {width: 150}]}>No.of Items</Text>
              <Text style={[textStyle, {width: 200, paddingLeft:30}]}>Status</Text>
              <Text style={[textStyle, {width: 150, paddingLeft:30}]}>Created At</Text>
              <Text style={{width: 100, paddingLeft:60}}><Ionicons name="chevron-down-circle-outline" size={20} color='black' /></Text>
            </View>
            <Divider width={1} color='rgba(192,192,192,0.5)' />
            <View style={containerStyle}>
              <Text style={tableCellStyle}>15</Text>
              <Text style={tableCellStyle}>Momos</Text>
              <Text style={tableCellStyle}>0</Text>
              <Text style={[tableCellStyle,{ width: 200}]}>Enabled</Text>
              <Text style={tableCellStyle}>3:14 10/02/2022</Text>
              <Icon name="edit" size={25} /><Icon name="delete" size={25} color='red' />
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
    paddingVertical: 15,
  },
  textStyle:{
    fontSize:20,
    fontWeight:'bold',
    color:'black',
  },
  tableCellStyle:{
    fontSize:17,
    color: 'black',
    width: 150,
  }
});