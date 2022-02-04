import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { Button } from '../components/common/Button';

class LoginScreen extends Component {
  state = { email: '', password: '', };

  renderButton() {
    // if (this.state.loading) {
    //   return <Spinner size="small" />;
    // }

    return (
      <Button>
        LOGIN
      </Button>
    );
  }

  render() {
    const { containerStyle, textStyle, inputStyle, imageStyle, buttonViewStyle, horizontalLineStyle } = styles;
    return (
      <View style={containerStyle}>
        <Image source={require('../assets/images/user.png')} style={imageStyle} />
        <Text style={textStyle}>Login</Text>
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
          <Text style={styles.footerText}>Don't have an account? 
            <Text onPress={() => this.props.navigation.navigate('Register')} style={styles.footerLink}>  Register</Text>
          </Text>
          <Text style={styles.forgotPasswordStyle}>Forgot Password</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    elevation: 1,
    marginHorizontal: 25,
    marginTop: 100,
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
    marginTop: 20
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
    alignItems:'center',
    marginVertical: 15,
  },
  forgotPasswordStyle:{
    color: "slateblue",
    fontSize: 18,
    marginVertical: 20,
  },
});

export default LoginScreen;