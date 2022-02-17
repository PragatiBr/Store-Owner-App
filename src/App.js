import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerItemList, DrawerContentScrollView } from "@react-navigation/drawer";
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
import BookingsScreen from "./screens/BookingsScreen";
import AssignTable from "./screens/AssignTableScreen";
import OrdersScreen from "./screens/OrdersScreen";
import EarningsScreen from "./screens/EarningsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import Addons from "./screens/AddonsScreen";
import AddAddonsScreen from "./screens/AddAddonsScreen";
import MenuCategory from "./screens/MenuCategoryScreen";
import AddMenuCategory from "./screens/AddMenuCategoryScreen";
import ItemsScreen from "./screens/ItemsScreen";
import AddItem from "./screens/AddItemScreen";
import FilterScreen from "./screens/FilterBookingScreen";
import AddBooking from "./screens/AddBookingScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="OrderInvoice" component={OrderInvoice} />
      <Stack.Screen name="Details" component={RestaurantDetail} />
      <Stack.Screen name="Edit" component={EditRestaurant} />
      <Stack.Screen name="TableShift" component={TableShiftScreen} />
      <Stack.Screen name="ShiftInfo" component={ShiftInformation} />
      <Stack.Screen name="TableSetup" component={TableSetupScreen} />
      <Stack.Screen name="AdditionalInfo" component={AdditionalInfo} />
      <Stack.Screen name="AddonCategory" component={AddonCategory} />
      <Stack.Screen name="Home" component={StoresScreen} />
      <Stack.Screen name="AddCategory" component={AddCategoryScreen} />
      <Stack.Screen name="Addons" component={Addons} />
      <Stack.Screen name="AddAddons" component={AddAddonsScreen} />
      <Stack.Screen name="MenuCategory" component={MenuCategory} />
      <Stack.Screen name="AddMenu" component={AddMenuCategory} />
      <Stack.Screen name="Items" component={ItemsScreen} />
      <Stack.Screen name="AddItem" component={AddItem} />
      <Stack.Screen name="Filter" component={FilterScreen} />
      <Stack.Screen name="AddBooking" component={AddBooking} />
    </Stack.Navigator>
  );
}

const CustomDrawerContentComponent = (props) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.drawerHeader}>
        <Image
          style={styles.drawerImage}
          source={require('./assets/images/app_logo.jpeg')}
        />
        <Text style={styles.textStyle}>User Logo</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };

    LogBox.ignoreLogs([
      "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
    ]);
  }
  render() {
    return (
      <NavigationContainer>
        {this.state.isLoggedIn
          ? <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
          : <Drawer.Navigator
            initialRouteName="Feed"
            screenOptions={{
              headerShown: false, drawerStyle: {
                backgroundColor: 'lightsteelblue',
                width: 300,
                overlayColor: 'transparent',
              },
            }}
            drawerContent={(props) => <CustomDrawerContentComponent {...props} />}
            >
            <Drawer.Screen name="Feed" component={Home} options={{ drawerLabel: 'DASHBOARD' }} />
            <Drawer.Screen name="Stores" component={StoresScreen} options={{ drawerLabel: 'STORES' }} />
            <Drawer.Screen name="ItemsMenu" component={ItemsMenuScreen} options={{ drawerLabel: 'ITEMS & MENU' }} />
            <Drawer.Screen name="Bookings" component={BookingsScreen} options={{ drawerLabel: 'BOOKINGS' }} />
            <Drawer.Screen name="AssignTable" component={AssignTable} options={{ drawerLabel: 'ASSIGN TABLE' }} />
            <Drawer.Screen name="Orders" component={OrdersScreen} options={{ drawerLabel: 'ORDERS' }} />
            <Drawer.Screen name="Earnings" component={EarningsScreen} options={{ drawerLabel: 'EARNINGS' }} />
            <Drawer.Screen name="Settings" component={SettingsScreen} options={{ drawerLabel: 'SETTINGS' }} />
          </Drawer.Navigator>
        }
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  drawerHeader: {
    height: 100,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -5,
  },
  drawerImage: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    backgroundColor: 'silver',
  },
  textStyle: {
    backgroundColor: 'silver',
    color: 'black',
    width: 100,
    textAlign: 'center',
  },
});

export default App;