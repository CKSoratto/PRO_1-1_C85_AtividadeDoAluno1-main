import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/Register";
import { firebaseConfig } from "./config.js";
import firebase from "firebase";

const Stack = createStackNavigator();


if(!firebase.apps.length){

  firebase.initializeApp(firebaseConfig);

} else {

  firebase.app();

}

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="Dashboard" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}