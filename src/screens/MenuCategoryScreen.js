import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Divider } from "react-native-elements";

export default class MenuCategory extends Component{
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
              onPress={() => this.props.navigation.navigate('AddMenu')}
            />
        </View>
        </View>
        <Divider width={3} color='rgba(192,192,192,0.5)' />
        <ScrollView horizontal >
          <View>
            <View style={containerStyle}>
              <Text style={[textStyle, {width: 150}]}>Category Id</Text>
              <Text style={[textStyle, {width: 100}]}>Name</Text>
              <Text style={[textStyle, {width: 200}]}>No.of Items</Text>
              <Text style={[textStyle, {width: 200, paddingLeft:30}]}>Status</Text>
              <Text style={[textStyle, {width: 150, paddingLeft:40}]}>Created At</Text>
              <Text style={{width: 100, paddingLeft:60}}><Ionicons name="chevron-down-circle-outline" size={20} color='black' /></Text>
            </View>
            <Divider width={1} color='rgba(192,192,192,0.5)' />
            <View style={containerStyle}>
              <Text style={{ width: 150 }}>15</Text>
              <Text style={{ width: 100}}>Momos</Text>
              <Text style={{ width: 200}}>0</Text>
              <Text style={{ width: 200}}>Enabled</Text>
              <Text style={{ width: 150}}>3:14 10/02/2022</Text>
              <Icon name="edit" size={25} /><Icon name="delete" size={25} color='red' />
            </View>
            <Divider width={1} color='rgba(192,192,192,0.5)' />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    //height: 60,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
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