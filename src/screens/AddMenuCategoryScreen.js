import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class AddMenuCategory extends Component {
  constructor(props){
    super(props)
    this.state = {
      name : '',
    }
  }
  render(){
    return(
      <View style={{ backgroundColor: 'white', flex :1}}>
        <View style={styles.containerStyle}>
          <Text style={styles.textStyle}>Add New Item Category</Text>
          <Icon name="clear" size={25} onPress={() => this.props.navigation.navigate('MenuCategory')} />
        </View>
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}><Text style={{ color: 'red' }}>*</Text>Name: </Text>
          <TextInput
            placeholder="Enter Category Name"
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
    marginHorizontal:5,
    backgroundColor: 'white',
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
    width: 205,
    borderRadius:5,
    borderColor:'silver',
  },
  labelStyle:{
    color:'black',
    marginTop:5
  },
  dropdown1BtnStyle: {
    width: 205,
    height: 40,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderRadius:5,
    borderColor:'silver',
  },
  dropdown1BtnTxtStyle: { color:'grey', textAlign: "left", fontSize:15 },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    //borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left", fontSize:15 },
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
    marginTop:10,
  }
});