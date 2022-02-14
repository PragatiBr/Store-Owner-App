import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Divider } from "react-native-elements";
import RadioButtonRN from 'radio-buttons-react-native';
import CheckBox from 'react-native-check-box'

export default class AssignTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      res: {},
      isChecked: false,
      checkOptions: [
        {
          title: '3 (Seats = 4)',
          checked: false,
        },
        {
          title: '4 (Seats = 8)',
          checked: false,
        },
        {
          title: '5 (Seats = 2)',
          checked: false,
        },
      ]
    };

    this.data = [
      {
        label: '#WK4J6R (Sush k, No.of Person = 10, 2022-02-24 07:00AM)'
      },
      {
        label: '#YRYDN3 (Sush k, No.of Person = 10, 2022-02-24 07:00AM)'
      }
    ]
  }

  render() {
    const { iconStyle, buttonStyle, inputStyle, tableContainer, tableHeader, radioButtonText } = styles;
    return (
      <ScrollView horizontal>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <View style={{
                backgroundColor: 'lightgrey',
                borderRadius: 50 / 2,
                width: 55,
                height: 45,
                position: 'absolute',
              }}>
                <Text style={{
                  color: 'black', fontSize: 20, fontWeight: 'bold', textAlign: 'center', paddingVertical: 8
                }}>Logo</Text>
              </View>
              <Icon name="menu" size={30} style={iconStyle} onPress={() => this.props.navigation.openDrawer()} />
            </View>
            <Text style={buttonStyle} onPress={() => this.props.navigation.navigate('Filter')} >VENUE</Text>
            <Text style={buttonStyle} onPress={() => this.props.navigation.navigate('Filter')} >DATE</Text>
            <Text style={buttonStyle} onPress={() => this.props.navigation.navigate('Filter')} >TYPE</Text>
            <TextInput
              value={this.state.search}
              placeholder="Search"
              onChangeText={serach => this.setState({ serach })}
              style={inputStyle}
            />
          </View>
          <View style={tableContainer}>
            <View>
              <Text style={tableHeader}>BOOKING LISTS</Text>
              <RadioButtonRN
                data={this.data}
                initial={1}
                box={false}
                selectedBtn={(e) => this.setState({ res: e })}
                circleSize={10}
                style={radioButtonText}
              />
            </View>
            <Divider orientation="vertical" width={1} style={{ marginLeft: 20 }} color='black' />
            <View>
              <Text style={tableHeader}>LIST OF TABLES</Text>
              {this.state.checkOptions.map(opt => (
                <CheckBox
                  style={{ paddingTop: 8 }}
                  key={opt.title}
                  onClick={() => {
                    opt.checked = !opt.checked;
                    this.setState({
                      checkOptions : [
                        ...this.state.checkOptions
                      ]
                    })
                  }}
                  isChecked={opt.checked}
                  rightText={opt.title}
                  rightTextStyle={{ fontWeight: '600', color:'black' }}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 7,
    width: 200,
    height: 30,
    paddingLeft: 20,
    marginHorizontal: 20,
    marginTop: 15
  },
  buttonStyle: {
    borderWidth: 1,
    borderColor: 'silver',
    backgroundColor: 'silver',
    color: 'black',
    width: 100,
    height: 30,
    textAlign: 'center',
    padding: 5,
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 30,
    marginTop: 15,
  },
  iconStyle: {
    backgroundColor: 'black',
    color: 'white',
    height: 35,
    marginTop: 45,
    padding: 5
  },
  tableContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    flex: 1,
    marginTop: 20,
    marginHorizontal: 10,
    marginBottom: 10,
    height: Dimensions.get('window').height,
  },
  tableHeader: {
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 100,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  radioButtonText: {
    fontWeight: 'bold',
    paddingLeft: 5,
  }
});