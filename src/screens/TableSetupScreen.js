import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BackgroundImage from '../components/BackgroundImage';

export default class TableSetupScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisibleList: false,
      data: [
        {
          id: 1,
          name: 'Table Number',
          seats: 'No.of Seats',
        }
      ]
    }
  }

  deleteItemById = id => {
    const filteredData = this.state.data.filter(item => item.id !== id);
    this.setState({ data: filteredData });
  }

  renderTableComponent = (itemData) => {
    console.log('component render');
    return (
      <View style={{ flexDirection: 'row', marginLeft: 20, marginRight: 70, marginTop: 10 }}>
        <View>
          <Text style={styles.tableTextStyle}>{itemData.item.name}*</Text>
          <TextInput style={styles.inputStyle} />
        </View>
        <View>
          <Text style={styles.tableTextStyle}>{itemData.item.seats}*</Text>
          <TextInput style={styles.inputStyle} />
        </View>
        <View style={styles.clearButton}>
          <Icon
            color={'white'}
            name="clear"
            size={20}
            onPress={() => this.deleteItemById(itemData.item.id)}
          />
        </View>
      </View>
    );
  }

  render() {
    const { containerStyle, textStyle, buttonStyle, inputStyle, tableTextStyle, addButton } = styles;
    return (
      <View>
        <BackgroundImage />
        <View style={containerStyle}>
          <Text style={textStyle}>TABLE SETUP</Text>
          <Text style={buttonStyle} onPress={() => this.props.navigation.goBack('TableShift')} >UPDATE</Text>
        </View>
        <Text style={{ color: 'black', marginLeft: 10, fontSize: 15 }}>Add New Table</Text>
        <View style={addButton}>
          <Icon
            color={'white'}
            name="add"
            size={30}
            onPress={() => this.setState({ isVisibleList : true })}
          />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft:20, }}>
          <View>
            <Text style={tableTextStyle}>Table Number*</Text>
            <TextInput style={inputStyle} />
          </View>
          <View>
            <Text style={tableTextStyle}>No Of Seats*</Text>
            <TextInput style={inputStyle} />
          </View>
        </View>
        {this.state.isVisibleList 
        ? <FlatList 
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={(itemData) => 
            this.renderTableComponent(itemData)}
          /> 
        : null }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    //backgroundColor: 'white',
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
    width: 150,
    height: 30,
    padding: 5,
    marginRight: 20,
  },
  tableTextStyle: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 15,
  },
  addButton: {
    backgroundColor: 'blue',
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 10,
    padding: 5,
    marginTop: 10,
  },
  clearButton: {
    backgroundColor: 'red',
    width: 20,
    height: 20,
    marginTop: 30,
    borderRadius: 40 / 2,
    alignItems: 'center',
    marginLeft: 10,
  }
});