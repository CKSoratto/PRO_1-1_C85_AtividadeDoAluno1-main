import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../screens/Profile";
import LogoutScreen from "../screens/LogoutScreen";
import firebase from "firebase";
import CustomSidebarMenu from "../screens/CustomSidebarMenu";

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends React.Component {

  constructor(props){

    super(props)

    this.state = {

      light_theme: true

    }

  }

  fetchUser = async () => {

    var theme

    await firebase.database().ref("/users/" + firebase.auth().currentUser.uid).on("value", function (bah) {
      theme = bah.val().current_theme;
    });
    this.setState({
      light_theme: theme === "light" ? true : false,
    });

  }

  componentDidMount(){

    this.fetchUser()

  };

  render(){
  return (
    <Drawer.Navigator drawerContentOptions={{
      activeTintColor: "#e91e63",
      inactiveTintColor: "pink",
      itemStyle: { marginVertical: 5 }
    }}
    drawerContent={props => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen name="Tela Inicial" component={StackNavigator} options={{ unmountOnBlur: true }} />
      <Drawer.Screen name="Perfil" component={Profile} options={{ unmountOnBlur: true }} />
      <Drawer.Screen name="Logout" component={LogoutScreen} options={{ unmountOnBlur: true }} />
    </Drawer.Navigator>
    );
  }
};

