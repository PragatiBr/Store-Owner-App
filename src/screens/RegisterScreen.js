import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TextInput, ImageBackground, Dimensions } from 'react-native';
import { Button } from '../components/Button';

export default class RegisterScreen extends Component {
  state = { name: '', phone: '', email: '', password: '' }

  renderButton() {
    return (
      <Button>
        CREATE ACCOUNT
      </Button>
    );
  }

  render() {
    const { containerStyle, textStyle, inputStyle, imageStyle, buttonViewStyle, horizontalLineStyle, backgroundImageStyle } = styles;
    return (
      <View>
        <ImageBackground source={require('../assets/images/bg-image.jpg')} resizeMode='cover' style={backgroundImageStyle} />
        <View style={containerStyle}>
          <Image source={require('../assets/images/user.png')} style={imageStyle} />
          <Text style={textStyle}>Register</Text>
          <TextInput
            style={inputStyle}
            placeholder="Username"
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            placeholderTextColor='black'
          />
          <TextInput
            style={inputStyle}
            placeholder="Phone"
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="phone-pad"
            placeholderTextColor='black'
          />
          <TextInput
            style={inputStyle}
            placeholder="Useremail"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            placeholderTextColor='black'
          />
          <TextInput
            style={inputStyle}
            secureTextEntry
            placeholder="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            placeholderTextColor='black'
          />
          <View style={buttonViewStyle}>
            {this.renderButton()}
          </View>
          <View style={horizontalLineStyle}>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
            <View>
              <Text style={{ width: 40, textAlign: 'center', color: 'black', fontSize: 18 }}>OR</Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
          </View>
          <View style={styles.footerView}>
            <Text style={styles.footerText}>Already have an account?
              <Text onPress={() => this.props.navigation.navigate('Login')} style={styles.footerLink}>  Login</Text>
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    elevation: 1,
    marginHorizontal: Dimensions.get('window').width - 700,
    marginVertical: Dimensions.get('window').height - 900,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  backgroundImageStyle: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    flex: 1,
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    marginTop: 20,
  },
  inputStyle: {
    height: 40,
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: 'lightsteelblue',
    fontSize: 15,
    padding: 10,
    marginHorizontal: 10,
  },
  iconStyle: {
    alignSelf: 'center',
    borderRadius: 100 / 2,
    borderColor: 'lightsteelblue',
    borderWidth: 5,
    width: 100,
    height: 100,
  },
  imageStyle: {
    height: 100,
    width: 100,
    alignSelf: 'center'
  },
  buttonViewStyle: {
    marginTop: 10,
    height: 40,
  },
  horizontalLineStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 10,
  },
  footerLink: {
    color: "slateblue",
    fontSize: 18,
  },
  footerText: {
    fontSize: 18,
    color: 'black',
  },
  footerView: {
    alignItems: 'center',
    marginVertical: 15,
  },
  forgotPasswordStyle: {
    color: "slateblue",
    fontSize: 18,
    marginVertical: 20,
  },
});