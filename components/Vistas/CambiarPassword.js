import React, { useState, useEffect } from "react";
import { 
  ScrollView, 
  Text,
  Platform } from "react-native";
import { Button } from "react-native-paper";
//Componentes
import InputTextComponente from "../Componentes/InputText";
//Metodos
import PreticionCRUD from '../Metodos/PeticionCRUD';
//Constantes
const STORAGE_KEY = "usuario";

export default function Sesion({sesion,guardarSesion}){

  const [ aux, setAux ] = useState({...sesion, pass_usuario: "", cambiarPassword: false });
  //Variables
  const [ habilitado, setHabilitado ] = useState(true);
  const cambiarPassword = async() => {
    if(aux.pass_usuario!=""){
      setHabilitado(false);
      let modificar = await PreticionCRUD.ModificarObjeto("usuarios", 
        aux._id , 
        aux
      );
      if(modificar != null){
        guardarSesion(aux)
        alert(modificar);
      }
      else{
        alert('Hay, Dificultad para conectarse con el servidor')
      }
      setHabilitado(true);
    }
    else{
      alert("No pueden estar los campos vacios");
    }
  }
  //Vista
  return (
    <ScrollView>
      <InputTextComponente
        titulo="Contraseña"
        value={aux.pass_usuario}
        onChangeText={(text) => 
          setAux({...aux, pass_usuario:text})
        }
        enabled={habilitado}
        secureTextEntry={true} 
        primaryIcon="eye"
        secundaryIcon="eye-off"
      />
      <Button mode="contained" 
        onPress={cambiarPassword}>
        Cambiar Contraseña
      </Button>
    </ScrollView>
  );
}