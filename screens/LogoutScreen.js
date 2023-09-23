import React from "react";
import { Text, View } from "react-native";
import firebase from "firebase";

export default class LogoutScreen extends React.Component{

    componentDidMount(){

        firebase.auth().signOut()
        this.props.navigation.replace('LoginScreen')

    }

    render(){

        return(

            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>

                <Text> Carregando... </Text>

            </View>

        );
        
    }

}

//saúde











