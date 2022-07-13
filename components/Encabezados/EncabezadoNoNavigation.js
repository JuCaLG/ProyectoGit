import React from "react";
import { Avatar, IconButton } from 'react-native-paper';
import { Octicons } from '@expo/vector-icons'; 
import { View, StyleSheet, Text } from "react-native";

const header_Title = (nombre) => {
  return (
    <Text style={estilos.titulo}>
      {(nombre===undefined)? "Usuario":nombre}
    </Text>
  );
};

const Header_Left = (button) => {
  return <></>;
};

const Header_Right = (button) => {
  return <></>;
};

const EncabezadoNoNavigation = () => {
  return { 
    headerLeft: ()=> <Header_Left/>,
    headerRight: () => <Header_Right/>,
    headerTitleAlign: "center",
    headerTitleStyle: estilos.titulo,
    swipeEnabled: false
  };
}

export default EncabezadoNoNavigation;

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
  }
});