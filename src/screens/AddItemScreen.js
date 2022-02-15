import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ToggleSwitch from 'toggle-switch-react-native';

export default class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      productId: '',
      productSize: '',
      price: '',
      store: '',
      category: '',
      addonsCategory: '',
      image: '',
      isRecommended: false,
      isPopular: false,
      isNew: false,
      isVeg:true,
      storeData : ['Est Ovest', 'Mugen House All you can eat', 'Krung Thep', 'Frankly Bagels'],
      categoryData: ['Pizza', 'Salads', 'Main Course', 'Berger'],
    }
  }

  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={styles.containerStyle}>
          <Text style={styles.textStyle}>Add New Item</Text>
          <Icon name="clear" size={25} onPress={() => this.props.navigation.navigate('Items')} />
        </View>
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}><Text style={{ color: 'red' }}>*</Text>Item Name: </Text>
          <TextInput
            placeholder="Item Name"
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}>Item Description: </Text>
          <TextInput
            placeholder="Item Description"
            multiline={true}
            value={this.state.description}
            onChangeText={description => this.setState({ description })}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}>POS Product ID: </Text>
          <TextInput
            placeholder="POS Product ID"
            value={this.state.productId}
            onChangeText={productId => this.setState({ productId })}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}>POS Product Size: </Text>
          <TextInput
            placeholder="POS Product Size"
            value={this.state.size}
            onChangeText={size => this.setState({ size })}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}><Text style={{ color: 'red' }}>*</Text>Price: </Text>
          <TextInput
            placeholder="Item Price in $"
            value={this.state.price}
            onChangeText={price => this.setState({ price })}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}><Text style={{ color: 'red' }}>*</Text>Item's Store: </Text>
          <SelectDropdown
            data={this.state.storeData}
            onSelect={(store) => this.setState({ store })}
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
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}><Text style={{ color: 'red' }}>*</Text>Item's Category: </Text>
          <SelectDropdown
            data={this.state.categoryData}
            onSelect={(category) => this.setState({ category })}
            defaultButtonText={"Select Category"}
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
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}><Text style={{ color: 'red' }}>*</Text>Addons Category: </Text>
          <TextInput
            placeholder="Addons Category"
            value={this.state.addonsCategory}
            onChangeText={addonsCategory => this.setState({ addonsCategory })}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}><Text style={{ color: 'red' }}>*</Text>Image: </Text>
          <TextInput
            placeholder="Item Image"
            value={this.state.image}
            onChangeText={image => this.setState({ image })}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.containerStyle}>
          <ToggleSwitch
            isOn={this.state.isRecommended}
            onColor="green"
            offColor="grey"
            label="Is Recommended?"
            labelStyle={styles.labelStyle}
            onToggle={isOn => this.setState({ isRecommended: isOn })}
          />
          <ToggleSwitch
            isOn={this.state.isNew}
            onColor="green"
            offColor="grey"
            label="Is New?"
            labelStyle={styles.labelStyle}
            onToggle={isOn => this.setState({ isNew: isOn })}
          />    
          </View>
          <View style={styles.containerStyle}>          
            <ToggleSwitch
              isOn={this.state.isPopular}
              onColor="green"
              offColor="grey"
              label="Is Popular?"
              labelStyle={[styles.labelStyle, {paddingRight: 40}]}
              onToggle={isOn => this.setState({ isPopular: isOn })}
            />     
            <ToggleSwitch
              isOn={this.state.isVeg}
              onColor="green"
              offColor="grey"
              label="Is Veg?"
              labelStyle={styles.labelStyle}
              onToggle={isOn => this.setState({ isVeg: isOn })}
            />          
        </View>
        <Text style={styles.buttonStyle}>Save  <MaterialCommunityIcons name="database-import" size={20} color='white' /></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  inputStyle: {
    borderWidth: 1,
    height: 35,
    padding: 5,
    width: 350,
    borderRadius: 5,
    borderColor: 'silver',
  },
  labelStyle: {
    color: 'black',
    marginTop: 5,
    fontSize: 15,
  },
  dropdown1BtnStyle: {
    width: 350,
    height: 40,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'silver',
  },
  dropdown1BtnTxtStyle: { color: 'grey', textAlign: "left", fontSize: 15 },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    //borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left", fontSize: 15 },
  buttonStyle: {
    backgroundColor: 'slateblue',
    color: 'white',
    width: 100,
    height: 35,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginRight: 10,
    textAlign: 'center',
    padding: 5,
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 20,
  },
});