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

const titulo = (nombre) => {
  return (
    <View style={estilos.contenedor}>
      <View style={estilos.contenedorTitulo}>
        <Avatar.Icon size={35} icon="folder" />
        <View>
          <Text style={estilos.titulo}>Bienvenido(a),</Text>
          <Text style={estilos.subtitulo}>
            {(nombre===undefined)? "Usuario":nombre}
          </Text>
        </View>
      </View>
    </View>
  );
};

const derecha = (button) => {
  return (
    <IconButton  
      color="black"
      size={24}
      icon="menu"
      onPress={() => button()}/>
  );
};

const EncabezadoInicio = ({openDrawer},nombre) => {
  return { 
    headerLeft: izquierdo,
    headerTitleAlign: "center",
    headerTitle: () => titulo(nombre),
    headerRight: () => derecha(openDrawer)
  };
}

export default EncabezadoInicio;

const estilos = StyleSheet.create({
  contenedorTitulo:{
    alignItems: "center",
    flexDirection: "row",
  },
  titulo: {
    fontSize: 14,
    fontWeight: "bold"
  },
  subtitulo: {
    fontSize: 12,
    fontWeight: "normal"
  }
});