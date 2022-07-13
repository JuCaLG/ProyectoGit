import React from "react";
import { Avatar, IconButton } from 'react-native-paper';
import { Octicons } from '@expo/vector-icons'; 
import { View, StyleSheet, Text } from "react-native";

const izquierdo = (button) => {
  return (
    <IconButton  
      color="white"
      size={24}
      icon="arrow-left"
      onPress={button}/>
  );
};

const derecha = (button) => {
  return (
    <IconButton  
      color="white"
      size={24}
      icon="delete"
      onPress={button}/>
  );
};

const EncabezadoSeleccionar = (titulo,accion1,accion2) => {
  return { 
    headerLeft: () => izquierdo(accion2),
    headerTitleAlign: "left",
    headerStyle: estilos.container,
    headerTitleStyle: estilos.titulo,
    headerTitle: titulo,
    headerRight: () => derecha(accion1),
    swipeEnabled: false
  };
}

export default EncabezadoSeleccionar;

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#1d7be5"
  },
  titulo: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "bold"
  },
});