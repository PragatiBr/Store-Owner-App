import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Divider } from "react-native-elements";

export default class ItemsScreen extends Component{
  constructor(props){
    super(props)
    this.state = { 
      search: '',
    }
  }
  render(){
    const { containerStyle, inputStyle, addButton, textStyle } = styles 
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
            onPress={() => this.props.navigation.navigate('AddItem')}
          />
        </View>
        </View>
        <Divider width={3} color='rgba(192,192,192,0.5)' />
        <ScrollView horizontal >
          <View>
            <View style={containerStyle}>
              <Text style={[textStyle, {width: 100}]}>Image</Text>
              <Text style={[textStyle, {width: 100}]}>Name</Text>
              <Text style={[textStyle, {width: 150}]}>Store's Name</Text>
              <Text style={[textStyle, {width: 100}]}>Item's Category</Text>
              <Text style={[textStyle, {width: 150, paddingLeft:40}]}>Price</Text>
              <Text style={[textStyle, {width: 150,paddingLeft:40}]}>Attributes</Text>
              <Text style={[textStyle, {width: 120, paddingLeft:40}]}>Created At</Text>
              <Text style={{width: 100, paddingLeft:60}}><Ionicons name="chevron-down-circle-outline" size={20} color='black' /></Text>
            </View>
            <Divider width={1} color='rgba(192,192,192,0.5)' />
            <View style={containerStyle}>
              <Image source={{ uri:'https://demo.ozeatsonline.com.au/assets/img/items/16442900557ioJzLFpow.jpg' }} style={styles.imageStyle} />
              <Text style={{ width: 100}}>PAPPARDELLE AL RAGU</Text>
              <Text style={{ width: 150}}>Est Ovest</Text>
              <Text style={{ width: 150}}>Pizza</Text>
              <Text style={{ width: 150}}>28.00</Text>
              <Text style={{ width: 150}}>New</Text>
              <Text style={{ width: 120}}>3:14 10/02/2022</Text>
              <Icon name="edit" size={25} /><Icon name="delete" size={25} color='red' />
            </View>
            <Divider width={1} color='rgba(192,192,192,0.5)' />
          </View>
        </ScrollView>
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
    marginVertical: 15,
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
  imageStyle:{
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight:10,
  },
});