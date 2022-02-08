import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import DashboardScreen from "./screens/DashboardScreen";
import OrderInvoice from "./screens/OrderInvoiceScreen";
import StoresScreen from "./screens/StoresScreen";
import RestaurantDetail from "./screens/RestaurantDetailsScreen";
import EditRestaurant from "./screens/EditRestaurantScreen";

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

class App extends Component{
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="OrderInvoice" component={OrderInvoice} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="Store" component={StoresScreen} />
          <Stack.Screen name="Details" component={RestaurantDetail} />
          <Stack.Screen name="Edit" component={EditRestaurant} />
        </Stack.Navigator>
        {/* <Drawer.Navigator>
          <Drawer.Screen name="Dashboard" component={DashboardScreen} />
          <Drawer.Screen name="Stores" component={StoresScreen} />
        </Drawer.Navigator> */}
      </NavigationContainer>
    );
  }
}

export default App;