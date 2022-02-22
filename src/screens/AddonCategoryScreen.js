import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Divider } from "react-native-elements";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackgroundImage from "../components/BackgroundImage";
import ItemMenuHeader from "../components/ItemMenuHeader";

export default class AddonCategory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
    }
  }

  render() {
    const { containerStyle, textStyle, tableCellStyle } = styles
    return (
      <View>
        <BackgroundImage />
        <ItemMenuHeader
          value={this.state.search}
          placeholder="Search"
          onChangeText={search => this.setState({ search })}
          onPress={() => this.props.navigation.navigate('AddCategory')}
        />
        <Divider width={3} color='rgba(192,192,192,0.5)' />
        <View>
          <View style={containerStyle}>
            <Text style={[textStyle, { width: 150 }]}>Name</Text>
            <Text style={[textStyle, { width: 150 }]}>Type</Text>
            <Text style={[textStyle, { width: 150 }]}>No.of Addons</Text>
            <Text style={[textStyle, { width: 150, paddingLeft: 60 }]}>Created At</Text>
            <Text style={{ width: 100, paddingLeft: 60 }}><Ionicons name="chevron-down-circle-outline" size={20} color='black' /></Text>
          </View>
          <Divider width={1} color='rgba(192,192,192,0.5)' />
          <View style={containerStyle}>
            <Text style={tableCellStyle}>Drink</Text>
            <Text style={tableCellStyle}>Single Selection</Text>
            <Text style={[tableCellStyle, { width: 200, paddingLeft: 35 }]}>0</Text>
            <Text style={tableCellStyle}>3:14 10/02/2022</Text>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="edit" size={25} />
              <Icon name="delete" size={25} color='red' />
            </View>
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
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  tableCellStyle: {
    color: 'black',
    fontSize: 15,
    width: 150,
  }
});