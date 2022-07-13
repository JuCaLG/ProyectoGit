import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Text } from "react-native";
//Metodos
import VariableSesion from "./components/Metodos/VariableSesion";
import PeticionCRUD from "./components/Metodos/PeticionCRUD";
//Herramientas
import { useNetInfo } from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';
//Componentes
import NavigationNavigation from "./components/Navegacion/Navigation";
//Constantes
const STORAGE_KEY = "usuario";

export default function App() {
  //Veriables
  const [ sesion, setSesionVar ] = useState(null);
  //Verifica si hay conexion con internet
  const internet = useNetInfo().isInternetReachable;
  //Sesion
  const cerrarSesion = async() => {
    const respuesta = await
      VariableSesion.CerrarSesion(STORAGE_KEY);
    if(!respuesta){
      alert("No se pudo cerrar la sesion, cominiquese con el desarrollador");
    }else{
      setSesionVar(null)
    }
  }
  const guardarSesion = async(dato) => {
    const respuesta = 
      await VariableSesion.GuardarSesion(
        STORAGE_KEY,
        JSON.stringify(dato)
      );
    if(respuesta){
      setSesionVar(dato);
    }
    else{
      alert("No se pudo guardar la sesion, cominiquese con el desarrollador");  
    }
  }
  const verSesion = async() => {
    const obtener = await 
      VariableSesion.CargarSesion(STORAGE_KEY);
    if(obtener!=false){
      const aux = await PeticionCRUD.Sesion(
        {
          email_usuario: obtener.email_usuario,
          pass_usuario: obtener.pass_usuario
        }
      );
      setSesionVar(aux? aux : null);
    }
    else{
      setSesionVar(null);
    }
  }
  return (
    <>
      {(internet)? 
        (
          <NavigationContainer>
            <NavigationNavigation 
              sesion={sesion} 
              cerrarSesion={cerrarSesion} 
              guardarSesion={guardarSesion}
              verSesion={verSesion}/>
          </NavigationContainer>
        ):
        (
          <Text>No tiene conexion a internet</Text>
        )
      }
    </>
  );
}