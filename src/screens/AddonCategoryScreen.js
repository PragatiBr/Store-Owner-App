import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Divider } from "react-native-elements";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DataTable } from 'react-native-paper';

export default class AddonCategory extends Component {
  constructor(props){
    super(props)
    this.state = { search: '' }
  }
  render(){
    const { containerStyle, inputStyle, addButton, textStyle } = styles ;
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
            onPress={() => this.props.navigation.navigate('AddCategory')}
          />
        </View>
        </View>
        <Divider width={3} color='rgba(192,192,192,0.5)' />
        <View style={containerStyle}>
          <Text style={textStyle}>Name</Text>
          <Text style={textStyle}>Type</Text>
          <Text style={textStyle}>No.of Addons</Text>
          <Text style={textStyle}>Created At</Text>
          <Text>Button</Text>
        </View>
        <View style={containerStyle}>
          <Text style={textStyle}>Aaaa</Text>
          <Text style={textStyle}>bbb</Text>
          <Text style={textStyle}>3</Text>
          <Text style={textStyle}>3:14 02/02/2022</Text>
          <Text><Icon name="edit" size={25} /><Icon name="delete" size={25} color='red' /></Text>
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
    width: 250,
    height: 30,
    paddingLeft: 20,
  },
  textStyle:{
    fontSize:16,
    fontWeight:'bold',
    color:'black',
  },
});