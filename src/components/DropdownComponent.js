import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import SelectDropdown from 'react-native-select-dropdown';

export default class DropdownComponent extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}><Text style={{ color: 'red' }}>*</Text>{this.props.label}</Text>
        <SelectDropdown
          data={this.props.data}
          onSelect={this.props.onSelect}
          defaultButtonText={this.props.defaultButtonText}
          buttonTextAfterSelection={this.props.buttonTextAfterSelection}
          rowTextForSelection={this.props.rowTextForSelection}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={this.props.renderDropdownIcon}
          dropdownIconPosition={"right"}
          rowTextStyle={styles.dropdown1RowTxtStyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    marginVertical: 10,
    marginHorizontal:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelStyle:{
    color:'black',
    marginTop:5,
    fontSize: 20,
  },
  dropdown1BtnStyle: {
    width: 400,
    height: 40,
    borderWidth: 1,
    borderRadius:5,
    borderColor:'silver',
  },
  dropdown1BtnTxtStyle: { color:'grey', textAlign: "left", fontSize:15 },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left", fontSize:15 },
})