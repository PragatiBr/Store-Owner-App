import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerItemList, } from "@react-navigation/drawer";
import { LogBox, View, StyleSheet, Image, Text } from 'react-native';
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import DashboardScreen from "./screens/DashboardScreen";
import OrderInvoice from "./screens/OrderInvoiceScreen";
import StoresScreen from "./screens/StoresScreen";
import RestaurantDetail from "./screens/RestaurantDetailsScreen";
import EditRestaurant from "./screens/EditRestaurantScreen";
import TableShiftScreen from "./screens/Table&ShiftScreen";
import ShiftInformation from "./screens/ShiftInformation";
import TableSetupScreen from "./screens/TableSetupScreen";
import AdditionalInfo from "./screens/AdditionalInfoScreen";
import ItemsMenuScreen from "./screens/Items&MenuScreen";
import AddonCategory from "./screens/AddonCategoryScreen";
import AddCategoryScreen from "./screens/AddAddonCategoryScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="OrderInvoice" component={OrderInvoice} />
      <Stack.Screen name="Details" component={RestaurantDetail} />
      <Stack.Screen name="Edit" component={EditRestaurant} />
      <Stack.Screen name="TableShift" component={TableShiftScreen} />
      <Stack.Screen name="ShiftInfo" component={ShiftInformation} />
      <Stack.Screen name="TableSetup" component={TableSetupScreen} />
      <Stack.Screen name="AdditionalInfo" component={AdditionalInfo} />
      <Stack.Screen name="AddonCategory" component={AddonCategory}  />
      <Stack.Screen name="Home" component={StoresScreen} />
      <Stack.Screen name="AddCategory" component={AddCategoryScreen} />

    </Stack.Navigator>
  );
}

const CustomDrawerContentComponent = (props) => {
  return (
    <View style={styles.drawerHeader}>
      <Image
        style={styles.drawerImage}
        source={{ uri:('https://reactnative.dev/img/tiny_logo.png')}} 
      />
      <Text style={styles.textStyle}>User Logo</Text>
      <DrawerItemList {...props} />
    </View>
  );
}

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {isLoggedIn : false};

    LogBox.ignoreLogs([
      "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
    ]);
  }
  render(){
    return (
      <NavigationContainer>
        {this.state.isLoggedIn 
        ? <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
        : <Drawer.Navigator 
            initialRouteName="Feed" 
            screenOptions={{ headerShown: false }}
            //drawerContent={(props) => <CustomDrawerContentComponent {...props} />} 
          >
            <Drawer.Screen name="Feed" component={Home} options={{ drawerLabel: 'Dashboard' }} />
            <Drawer.Screen name="Stores" component={StoresScreen} />
            <Drawer.Screen name="Items Menu" component={ItemsMenuScreen} />
          </Drawer.Navigator>}
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  drawerHeader: {
    height: 80,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  drawerImage: {
    height: 50,
    width: 50,
    borderRadius: 75,
    backgroundColor:'silver'
  },
  textStyle:{
    backgroundColor: 'silver',
    color:'black',
    marginLeft: 100,
    width: 80,
    textAlign:'center',
    alignContent:'center',
  }
});

export default App;