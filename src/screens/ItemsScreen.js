import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Divider } from "react-native-elements";
import BackgroundImage from "../components/BackgroundImage";
import ItemMenuHeader from "../components/ItemMenuHeader";

export default class ItemsScreen extends Component{
  constructor(props){
    super(props)
    this.state = { 
      search: '',
    }
  }
  render(){
    const { containerStyle, textStyle, tableCellStyle } = styles;
    return(
      <View>
        <BackgroundImage />
        <ItemMenuHeader 
          value={this.state.search}
          placeholder="Search"
          onChangeText={search => this.setState({ search })}
          onPress={() => this.props.navigation.navigate('AddItem')}
        />
        <Divider width={2} color='black' />
        <View>
            <View style={containerStyle}>
              <Text style={textStyle}>Image</Text>
              <Text style={[textStyle, {width: 120}]}>Name</Text>
              <Text style={[textStyle, {width: 150}]}>Store's Name</Text>
              <Text style={textStyle}>Item's Category</Text>
              <Text style={textStyle}>Price</Text>
              <Text style={textStyle}>Attributes</Text>
              <Text style={[textStyle, {width: 120,paddingLeft: 20}]}>Created At</Text>
              <Text style={{width: 100, paddingLeft:60}}><Ionicons name="chevron-down-circle-outline" size={25} color='black' /></Text>
            </View>
            <Divider width={0.5} color='black' />
            <View style={containerStyle}>
              <Image source={{ uri:'https://demo.ozeatsonline.com.au/assets/img/items/16442900557ioJzLFpow.jpg' }} style={styles.imageStyle} />
              <Text style={[tableCellStyle,{width: 120}]}>PAPPARDELLE AL RAGU</Text>
              <Text style={[tableCellStyle,{width:150}]}>Est Ovest</Text>
              <Text style={tableCellStyle}>Pizza</Text>
              <Text style={tableCellStyle}>28.00</Text>
              <Text style={tableCellStyle}>New</Text>
              <Text style={[tableCellStyle, {width: 120}]}>3:14 10/02/2022</Text>
              <View style={{flexDirection:'row'}}>
                <Icon name="edit" size={25} />
                <Icon name="delete" size={25} color='red' />
              </View>
            </View>
            <Divider width={0.5} color='black' />
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
    marginVertical: 20,
  },
  textStyle:{
    fontSize:20,
    fontWeight:'bold',
    color:'black',
    width: 100,
  },
  imageStyle:{
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight:10,
  },
  tableCellStyle:{
    width: 100, 
    color:"black",
    fontSize: 15,
    textAlign:"auto",
  },
});