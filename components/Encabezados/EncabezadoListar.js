import React from "react";
import { Avatar, IconButton } from 'react-native-paper';
import { Octicons } from '@expo/vector-icons'; 
import { View, StyleSheet, Text } from "react-native";

const izquierdo = () => {
  return (
    <>
    </>
  );
};

const derecha = (button) => {
  return (
    <IconButton  
      color="black"
      size={24}
      icon="menu"
      onPress={button}/>
  );
};

const EncabezadoListar = ({openDrawer},titulo) => {
  return { 
    headerLeft: izquierdo,
    headerTitleAlign: "center",
    headerStyle: estilos.container,
    headerTitleStyle: estilos.titulo,
    headerTitle: titulo,
    headerRight: () => derecha(openDrawer)
  };
}

export default EncabezadoListar;

const estilos = StyleSheet.create({
  container: {
    backgroundColor: undefined
  },
  titulo: {
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "bold"
  },
});