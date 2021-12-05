import "react-native-gesture-handler";
import React, { useEffect, useState } from 'react';
import { View, Text } from "react-native-animatable";
import { NavigationContainer } from "@react-navigation/native";
import { useNetInfo } from "@react-native-community/netinfo";
//import * as Notifications from 'expo-notifications';

//Contenedor de Navegador
import NavegacionSolecc from "./app/navegacion/navegacionSolecc";

/*
const getToken = async () => {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== 'granted') {
    alert('Failed to get push token for push notification!');
    return;
  }
  const token = (await Notifications.getExpoPushTokenAsync()).data;
  console.log(token);

  return token;
}
*/

const App = () => {

  const internet = useNetInfo().isInternetReachable;

  return (
    <>
      {internet? 
      (
        <>
          <NavigationContainer>
            <NavegacionSolecc />
          </NavigationContainer>
          <Text>{internet? "Con":"Sin"} Internet</Text>
        </>
      )
      :
      (
        <View>
          <Text>{internet? "Con":"Sin"} Internet</Text>
        </View>
      )
      }
    </>
  );

}

export default App;