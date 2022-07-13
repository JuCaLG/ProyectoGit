import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { Headline, Caption, Divider } from 'react-native-paper';

//Conponentes
import TextAcercaDe from "../TextoEstatico/TextoAcercaDe";

export default function AcercaDe(){
  return (
    <ScrollView style={estilos.contenedor}>
      <Headline style={estilos.titulo}>
        {TextAcercaDe.Titulo}
      </Headline>
      <Caption>Versión {TextAcercaDe.Version} </Caption>
      <Divider />
      <Text style={estilos.parrafo}>{TextAcercaDe.Descripcion}</Text>
    </ScrollView>
  )
}

const estilos = StyleSheet.create({
  contenedor: {
    padding: 10
  },
  titulo: {
    textTransform: "uppercase"
  },
  parrafo: {
    textAlign: 'justify',
    padding: 10
  }
});