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

const header_Left = (button) => {
  return (
    <IconButton  
      color="black"
      size={24}
      icon="arrow-left"
      onPress={button}/>
  );
};

const EncabezadoStack = ({goBack}) => {
  return { 
    headerLeft: () => header_Left(goBack),
    headerTitleAlign: "center",
    headerTitleStyle: estilos.titulo,
    swipeEnabled: false
  };
}

export default EncabezadoStack;

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
  }
});