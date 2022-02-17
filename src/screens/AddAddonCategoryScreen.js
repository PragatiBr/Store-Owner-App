import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BackgroundImage from "../components/BackgroundImage";

export default class AddCategoryScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      catName : '',
      type: ''
    }
  }
  render(){
    var data = ["Single Selection", "Multiple Selection"];
    return(
      <View>
        <BackgroundImage />
        <View style={styles.containerStyle}>
          <Text style={styles.textStyle}>Add New Addon Category</Text>
          <Icon name="clear" size={25} onPress={() => this.props.navigation.navigate('AddonCategory')} />
        </View>
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}><Text style={{ color: 'red' }}>*</Text>Addon Category Name: </Text>
          <TextInput
            placeholder="Addon Category Name"
            value={this.state.catName}
            onChangeText={name => this.state({ catName: name })}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}><Text style={{ color: 'red' }}>*</Text>Type: </Text>
          <SelectDropdown
            data={data}
            onSelect={(type) => this.setState({type})}
            defaultButtonText={"Single Selection"}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={(isOpened) => {
              return (
                <FontAwesome
                  name={isOpened ? "chevron-up" : "chevron-down"}
                  color={"grey"}
                  size={18}
                />
              );
            }}
            dropdownIconPosition={"right"}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
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
    //backgroundColor: 'white',
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
    width: 300,
    borderRadius:5,
    borderColor:'silver',
  },
  labelStyle:{
    color:'black',
    marginTop:5,
    fontSize: 20,
  },
  dropdown1BtnStyle: {
    width: 300,
    height: 40,
    //backgroundColor: "#FFF",
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