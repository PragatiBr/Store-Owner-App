import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Image, ImageBackground, Dimensions } from 'react-native';
import { Button } from '../components/common/Button';
import DialogInput from 'react-native-dialog-input';

class LoginScreen extends Component {

  state = { email: '', password: '', isDialogVisible: false };

  renderButton() {
    // if (this.state.loading) {
    //   return <Spinner size="small" />;
    // }
    return (
      <Button onPress={() => this.props.navigation.replace('Dashboard')}>
        LOGIN
      </Button>
    );
  }

  render() {
    const {
      containerStyle,
      textStyle,
      inputStyle,
      imageStyle,
      buttonViewStyle,
      horizontalLineStyle,
      backgroundImageStyle,
    } = styles;
    return (
      <View>
        <ImageBackground source={require('../assets/images/bg-image.jpg')} resizeMode='cover' style={backgroundImageStyle} />
        <View style={containerStyle}>
          {/* Logo section */}
          <Image source={require('../assets/images/user.png')} style={imageStyle} />
          {/* Login Form */}
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
          {/* Button Section */}
          <View style={buttonViewStyle}>
            {this.renderButton()}
          </View>
          {/* Or Section */}
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
            <Text onPress={() => this.setState({ isDialogVisible: true })} style={styles.forgotPasswordStyle}>Forgot Password</Text>
          </View>
          {/* Dialog box */}
          <DialogInput
            isDialogVisible={this.state.isDialogVisible}
            title={"Forgot Password"}
            message={"Link will be share on registered email."}
            hintInput={"Enter Email"}
            submitInput={(email) => this.setState({ email })}
            closeDialog={() => this.setState({ isDialogVisible: false })}
          />
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

export default LoginScreen;