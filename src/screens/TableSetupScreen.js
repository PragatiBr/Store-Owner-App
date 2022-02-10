import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class TableSetupScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isComponentVisible: 'false'
    }
  }

  addTableComponent = () => {
    console.log('button pressed');
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 70, marginTop: 10 }}>
        {this.state.isComponentVisible 
        ? <>
            <View>
              <Text style={styles.tableTextStyle}>Table Number*</Text>
              <TextInput style={styles.inputStyle} />
            </View>
            <View>
              <Text style={styles.tableTextStyle}>No Of Seats*</Text>
              <TextInput style={styles.inputStyle} />
            </View>
            <View style={styles.clearButton}>
              <Icon
                color={'white'}
                name="clear"
                size={30}
              />
            </View>
          </>
        : null
        }
      </View>
    );
  }

  render() {
    const { containerStyle, textStyle, buttonStyle, inputStyle, tableTextStyle, addButton } = styles;
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={containerStyle}>
          <Text style={textStyle}>TABLE SETUP</Text>
          <Text style={buttonStyle} onPress={() => this.props.navigation.navigate('Store')} >UPDATE</Text>
        </View>
        <Text style={{ color: 'black', marginLeft: 10, }}>Add New Table</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 70, marginTop: 10 }}>
          <View>
            <Text style={tableTextStyle}>Table Number*</Text>
            <TextInput style={inputStyle} />
          </View>
          <View>
            <Text style={tableTextStyle}>No Of Seats*</Text>
            <TextInput style={inputStyle} />
          </View>
        </View>
        <View style={addButton}>
          <Icon
            color={'white'}
            name="add"
            size={30}
            onPress={this.addTableComponent}
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
    paddingHorizontal: 10,
  },
  textStyle: {
    color: 'black',
    fontSize: 18,
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
  inputStyle: {
    borderWidth: 1,
    width: 130,
    height: 30,
    padding: 5,
  },
  tableTextStyle: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  addButton: {
    backgroundColor: 'blue',
    width: 40,
    height: 40,
    marginTop: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 10,
    padding: 5,
  },
  clearButton: {
    backgroundColor: 'red',
    width: 40,
    height: 40,
    marginTop: 20,
    borderRadius: 40/2,
    alignItems: 'center',
    marginLeft: 10,
    padding: 5,
  }
});