import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ToggleSwitch from 'toggle-switch-react-native';
import BackgroundImage from "../components/BackgroundImage";
import DropdownComponent from "../components/DropdownComponent";
import Input from "../components/Input";

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
      isVeg: true,
      storeData: ['Est Ovest', 'Mugen House All you can eat', 'Krung Thep', 'Frankly Bagels'],
      categoryData: ['Pizza', 'Salads', 'Main Course', 'Berger'],
    }
  }

  render() {
    return (
      <View>
        <BackgroundImage />
        <View style={styles.containerStyle}>
          <Text style={styles.textStyle}>Add New Item</Text>
          <Icon name="clear" size={30} color="black" onPress={() => this.props.navigation.navigate('Items')} />
        </View>
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}><Text style={{ color: 'red' }}>*</Text>Item Name: </Text>
          <TextInput
            placeholder="Item Name"
            placeholderTextColor="black"
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            style={styles.inputStyle}
          />
        </View>
        <Input
          label="Item Description: "
          placeholder="Item Description"
          multiline={true}
          value={this.state.description}
          onChangeText={description => this.setState({ description })}
        />
        <Input
          label="POS Product ID: "
          placeholder="POS Product ID"
          value={this.state.productId}
          onChangeText={productId => this.setState({ productId })}
        />
        <Input
          label="POS Product Size: "
          placeholder="POS Product Size"
          value={this.state.size}
          onChangeText={size => this.setState({ size })}
        />
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}><Text style={{ color: 'red' }}>*</Text>Price: </Text>
          <TextInput
            placeholder="Item Price in $"
            placeholderTextColor="black"
            value={this.state.price}
            onChangeText={price => this.setState({ price })}
            style={styles.inputStyle}
          />
        </View>
        <DropdownComponent
          label="Item's Store: "
          data={this.state.storeData}
          onSelect={(store) => this.setState({ store })}
          defaultButtonText={"Select"}
          buttonTextAfterSelection={(selectedItem) => {
            return selectedItem;
          }}
          rowTextForSelection={(item) => {
            return item;
          }}
          renderDropdownIcon={(isOpened) => {
            return (
              <FontAwesome
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={"grey"}
                size={18}
              />
            );
          }}
        />
        <DropdownComponent
          label="Item's Category: "
          data={this.state.categoryData}
          onSelect={(category) => this.setState({ category })}
          defaultButtonText={"Select Category"}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          renderDropdownIcon={(isOpened) => {
            return (
              <FontAwesome
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={"grey"}
                size={18}
              />
            );
          }}
        />
        <Input 
          label="Addons Category: "
          placeholder="Addons Category"
          value={this.state.addonsCategory}
          onChangeText={addonsCategory => this.setState({ addonsCategory })}
        />
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}><Text style={{ color: 'red' }}>*</Text>Image: </Text>
          <TextInput
            placeholder="Item Image"
            placeholderTextColor="black"
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
            labelStyle={[styles.labelStyle, { paddingRight: 40 }]}
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
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  inputStyle: {
    borderWidth: 1,
    height: 35,
    padding: 5,
    width: 400,
    borderRadius: 5,
    borderColor: 'black',
  },
  labelStyle: {
    color: 'black',
    marginTop: 5,
    fontSize: 20,
  },
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