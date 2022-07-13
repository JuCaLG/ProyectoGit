import React, { useEffect, useState } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
//Encabezados
import EncabezadoInicio from "../Encabezados/EncabezadoInicio";
import EncabezadoListar from "../Encabezados/EncabezadoListar";
import EncabezadoFormulario from "../Encabezados/EncabezadoFormulario";
import EncabezadoStack from "../Encabezados/EncabezadoStack";
//Componentes
import Menu from "./Menu/Menu";
//Pantallas
import Principal from "../Vistas/Principal";
import Listar from "../Vistas/Accion/Listar";
import Formulario from "../Vistas/Accion/Formulario";
import Perfil from "../Vistas/Perfil";
import AcercaDe from "../Vistas/AcercaDe";
import Reportes from "../Vistas/Reportes";
//Variables Globales
const Drawer = createDrawerNavigator();

export default function DrawerNavigation(
  { sesion, cerrarSesion, guardarSesion }
) { 
  //Vista
  return(
    <Drawer.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        unmountOnBlur: true
      }}
      drawerContent={
        (props) => <Menu {...props} 
          cerrarSesion={cerrarSesion}
          nombre={sesion.nom_usuario} />
      }>
      <Drawer.Group
        screenOptions={({navigation}) => 
          EncabezadoInicio(navigation,sesion.nom_usuario)
        }>
        <Drawer.Screen name="Inicio"
          component={Principal}/>
      </Drawer.Group>
      <Drawer.Group
        screenOptions={({navigation}) => 
          EncabezadoListar(navigation)
        }>
        <Drawer.Screen name="Listar"
          component={Listar}/>
        <Drawer.Screen name="Reportes"
          component={Reportes}/>
      </Drawer.Group>
      <Drawer.Group
        screenOptions={({navigation}) => 
          EncabezadoFormulario(navigation)
        }>
        <Drawer.Screen name="Formulario"
          component={Formulario}/>
        <Drawer.Screen name="Perfil">
          {(props) => <Perfil {...props} 
            sesion={sesion} guardarSesion={guardarSesion}/>
          }
        </Drawer.Screen>
      </Drawer.Group>
      <Drawer.Group
        screenOptions={({navigation}) => 
          EncabezadoStack(navigation)
        }>
        <Drawer.Screen name="Acerca de"
          component={AcercaDe}/>
      </Drawer.Group>
    </Drawer.Navigator>
  );
}