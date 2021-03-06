import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BackgroundImage from "../components/BackgroundImage";

export default class AddMenuCategory extends Component {
  constructor(props){
    super(props)
    this.state = {
      name : '',
    }
  }
  render(){
    return(
      <View>
        <BackgroundImage />
        <View style={styles.containerStyle}>
          <Text style={styles.textStyle}>Add New Item Category</Text>
          <Icon name="clear" size={25} color="black" onPress={() => this.props.navigation.navigate('MenuCategory')} />
        </View>
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}><Text style={{ color: 'red' }}>*</Text>Name: </Text>
          <TextInput
            placeholder="Enter Category Name"
            placeholderTextColor='black'
            value={this.state.name}
            onChangeText={name => this.state({ name })}
            style={styles.inputStyle}
          />
        </View>
        <Text style={styles.buttonStyle}>Save  <MaterialCommunityIcons name="database-import" size={20} color='white' /></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    marginVertical: 10,
    marginHorizontal:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  inputStyle:{
    borderWidth: 1,
    height: 35,
    padding:5,
    width: 400,
    borderRadius:5,
  },
  labelStyle:{
    color:'black',
    marginTop:5,
    fontSize: 20,
  },
  buttonStyle:{
    backgroundColor:'slateblue',
    color:'white',
    width:100,
    height:35,
    borderRadius:5,
    alignSelf:'flex-end',
    marginRight: 10,
    textAlign:'center',
    padding:5,
    fontWeight:'bold',
    fontSize:15,
    marginTop:20,
  }
});