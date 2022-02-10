import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { LogBox } from 'react-native';
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

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


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
            <Stack.Screen name="OrderInvoice" component={OrderInvoice} />
            <Stack.Screen name="Details" component={RestaurantDetail} />
            <Stack.Screen name="Edit" component={EditRestaurant} />
          </Stack.Navigator>
        : <Drawer.Navigator initialRouteName="Dashboard" >
            <Drawer.Screen name="Dashboard" component={DashboardScreen} />
            <Drawer.Screen name="Stores" component={StoresScreen} />
            <Drawer.Screen name="TableShift" component={TableShiftScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="ShiftInformation" component={ShiftInformation} options={{ headerShown: false }} />
            <Drawer.Screen name="TableSetup" component={TableSetupScreen} options={{ headerShown: false }} />
          </Drawer.Navigator>}
      </NavigationContainer>
    );
  }
}

export default App;