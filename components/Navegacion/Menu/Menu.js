import React from "react";
import { ScrollView, View, StyleSheet } from "react-native"
import { Divider, Drawer, Appbar } from 'react-native-paper';
import { DrawerContentScrollView } from '@react-navigation/drawer';

//Componentes
import DrawerItem from "../../Componentes/DrawerItem";
import EncabezadoMenu from "./EncabezadoMenu";
import DrawerList from "../../Componentes/DrawerList";
import AcordeonLista from "./AcordeonLista";
//Metodos

export default function Menu({navigation, cerrarSesion, nombre}) {
  return (
    <DrawerContentScrollView
      style={estilos.container}>
      <EncabezadoMenu
        style={estilos.cardTitle}
        titleStyle={estilos.title}
        title="Usuario"
        subtitleStyle={estilos.subtitle}
        subtitle={(nombre===undefined)? "Usuario":nombre}
        onPress={() => navigation.navigate("Perfil")}
      />
      <Divider 
        style={estilos.divider}/>
      <DrawerItem
        style={estilos.drawer}
        icon="home"
        styleIcon={estilos.drawerIcon}
        colorIcon={colorIcon}
        label="Inicio"
        styleLabel={estilos.drawerLabel1}
        onPress={() => navigation.navigate("Inicio")}
      />
      <DrawerItem
        style={estilos.drawer}
        icon="chart-bar-stacked"
        styleIcon={estilos.drawerIcon}
        colorIcon={colorIcon}
        label="Reportes"
        styleLabel={estilos.drawerLabel1}
        onPress={() => navigation.navigate("Reportes")}
      />
      <DrawerList listAccordion={AcordeonLista}
        titleStyle={estilos.drawerLabel1}
        colorIcons={colorIcon}
        style={estilos.drawerList}
        itemStyle={estilos.drawerListItem}
        navigate={navigation.navigate}
      />
      <Divider 
        style={estilos.divider}/>
      {/*
      <DrawerItem
        style={estilos.drawer}
        icon="palette"
        styleIcon={estilos.drawerIcon}
        colorIcon={colorIcon}
        label="Configuración"
        styleLabel={estilos.drawerLabel2}
        onPress={() => navigation.navigate("Configuración")}
      />
      */}
      <DrawerItem
        style={estilos.drawer}
        icon="help"
        styleIcon={estilos.drawerIcon}
        colorIcon={colorIcon}
        label="Acerca de"
        styleLabel={estilos.drawerLabel2}
        onPress={() => navigation.navigate("Acerca de")}
      />
      <DrawerItem
        style={estilos.drawer}
        icon="logout"
        styleIcon={estilos.drawerIcon}
        colorIcon={colorIcon}
        label="Cerrar Sesión"
        styleLabel={estilos.drawerLabel2}
        onPress={() => cerrarSesion()}
      />
    </DrawerContentScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#1d7be5", 
    flexGrow: 1
  },
  title: {
    color: "white",
    fontWeight: 'bold'
  },
  subtitle: {
    color: "white",
    fontSize: 15
  },
  cardTitle: {
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  divider: {
    margin: 7,
    marginTop: 2,
    backgroundColor: "white",
    height: 2
  },
  drawer: {
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  drawerList: {
    backgroundColor: '#1c293c',
    marginBottom: 2,
  },
  drawerListItem: {
    backgroundColor: '#c2e03e',
    marginBottom: 1,
  },
  drawerLabel1: {
    fontSize: 20,
    color: "white"
  },
  drawerLabel2: {
    color: "white"
  },
  drawerIcon: {
    padding: 0,
    color: "white",
    margin: -5,
  }
});
const colorIcon = "white";