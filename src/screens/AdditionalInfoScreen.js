import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class AdditionalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pax: '',
      emailFrom: '',
      teamName: '',
      emailOption:'',
    };
  }
  render() {
    const { containerStyle, textStyle, buttonStyle, formContainer, labelStyle, inputStyle } = styles;
    var data = ["Web Bookings", "App Bookings", "Both Web & App Bookings", "No Mail"];
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={containerStyle}>
          <Text style={textStyle}>ADDITIONAL INFORMATION</Text>
          <Text style={buttonStyle} onPress={() => this.props.navigation.navigate('TableShift')} >UPDATE</Text>
        </View>
        <View style={formContainer}>
          <Text style={labelStyle}>*Max No of Pax: </Text>
          <TextInput
            value={this.state.pax}
            onChangeText={(pax) => this.setState({pax})}
            style={inputStyle}
          />
        </View>
        <View style={formContainer}>
          <Text style={labelStyle}>*Email From: </Text>
          <TextInput
            value={this.state.emailFrom}
            onChangeText={(emailFrom) => this.setState({emailFrom})}
            style={inputStyle}
          />
        </View>
        <View style={formContainer}>
          <Text style={labelStyle}>*Team Name: </Text>
          <TextInput
            value={this.state.teamName}
            onChangeText={(teamName) => this.setState({teamName})}
            style={inputStyle}
          />
        </View>
        <View style={formContainer}>
          <Text style={labelStyle}>*Email Options: </Text>
          <SelectDropdown
            data={data}
            onSelect={(emailOption) => this.setState({emailOption})}
            defaultButtonText={"Select"}
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
                  color={"#444"}
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textStyle: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },
  buttonStyle: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'black',
    color: 'white',
    width: 100,
    height: 30,
    textAlign: 'center',
    padding: 5,
    fontWeight: '600',
    fontSize: 15,
  },
  formContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 8,
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  inputStyle: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
  },
  dropdown1BtnStyle: {
    width: 300,
    height: 40,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdown1BtnTxtStyle: { color: "grey", textAlign: "left", fontSize: 15 },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left", fontSize:15 },
}); 