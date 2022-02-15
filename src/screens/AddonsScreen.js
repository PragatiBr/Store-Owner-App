import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Divider } from "react-native-elements";

export default class Addons extends Component{
  constructor(props){
    super(props)
    this.state = { 
      search: '',
    }
  }
  render(){
    const { containerStyle, inputStyle, addButton, textStyle } = styles 
    return(
      <View style={{ backgroundColor:'white', flex: 1 }}>
        <View style={containerStyle}>
          <TextInput 
            value={this.state.search}
            placeholder="Search"
            onChangeText={search => this.setState({ search })}
            style={inputStyle}
          />
          <View style={addButton}>
          <Icon
            color={'white'}
            name="add"
            size={25}
            onPress={() => this.props.navigation.navigate('AddAddons')}
          />
        </View>
        </View>
        <Divider width={3} color='rgba(192,192,192,0.5)' />
          <View>
            <View style={containerStyle}>
              <Text style={[textStyle, {width: 150}]}>Name</Text>
              <Text style={[textStyle, {width: 100}]}>Price</Text>
              <Text style={[textStyle, {width: 200}]}>Addons Category</Text>
              <Text style={[textStyle, {width: 150}]}>Created At</Text>
              <Ionicons name="chevron-down-circle-outline" size={20} color='black' />
            </View>
            <Divider width={1} color='rgba(192,192,192,0.5)' />
            <View style={containerStyle}>
              <Text style={{ width: 150 }}>Coca Cola</Text>
              <Text style={{ width: 100}}>20</Text>
              <Text style={{ width: 200}}>Drink</Text>
              <Text style={{ width: 150}}>3:14 10/02/2022</Text>
              <View style={{ flexDirection:'row'}}>
                <Icon name="edit" size={30} /><Icon name="delete" size={30} color='red' />
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
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  addButton: {
    backgroundColor: 'blue',
    width: 30,
    height: 30,
    borderRadius: 8,
    alignSelf: 'center',
    padding: 3,
  },
  inputStyle :{
    backgroundColor: 'silver',
    borderRadius: 15,
    padding: 7,
    width: 400,
    height: 30,
    paddingLeft: 20,
  },
  textStyle:{
    fontSize:16,
    fontWeight:'bold',
    color:'black',
  },
});