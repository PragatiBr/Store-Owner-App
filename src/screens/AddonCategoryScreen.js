import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Divider } from "react-native-elements";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackgroundImage from "../components/BackgroundImage";

export default class AddonCategory extends Component {
  constructor(props){
    super(props)
    this.state = { 
      search: '',
    }
  }
  
  render(){
    const { containerStyle, inputStyle, addButton, textStyle } = styles 
    return(
      <View>
        <BackgroundImage />
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
              onPress={() => this.props.navigation.navigate('AddCategory')}
            />
          </View>
        </View>
        <Divider width={3} color='rgba(192,192,192,0.5)' />
          <View>
            <View style={containerStyle}>
              <Text style={[textStyle, {width: 150}]}>Name</Text>
              <Text style={[textStyle, {width: 150}]}>Type</Text>
              <Text style={[textStyle, {width: 150}]}>No.of Addons</Text>
              <Text style={[textStyle, {width: 150, paddingLeft:60}]}>Created At</Text>
              <Text style={{width: 100, paddingLeft:60}}><Ionicons name="chevron-down-circle-outline" size={20} color='black' /></Text>
            </View>
            <Divider width={1} color='rgba(192,192,192,0.5)' />
            <View style={containerStyle}>
              <Text style={{ width: 150 }}>Drink</Text>
              <Text style={{ width: 150}}>Single Selection</Text>
              <Text style={{ width: 200, paddingLeft:35}}>0</Text>
              <Text style={{ width: 150}}>3:14 10/02/2022</Text>
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
    paddingVertical: 20,
  },
  addButton: {
    backgroundColor: 'blue',
    width: 40,
    height: 40,
    borderRadius: 8,
    alignSelf: 'center',
    padding: 6,
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
  tableCellStyle:{
    
  }
});