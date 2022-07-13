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

export default function Sesion({ guardarSesion }){
  //Variables
  const [ sesion, setSesion ] = useState({
    email_usuario: "",
    pass_usuario: ""
  })
  const [ habilitado, setHabilitado ] = useState(true);
  //Metodos
  const onChangeValue = (nombre, value) => {
    setSesion({ ...sesion, [nombre]: value });
  };
  const inciarSesion = async() => {
    if( sesion.correo!="" && 
      sesion.password!=""){
      setHabilitado(false);
      let obtener = undefined;
      obtener = await PreticionCRUD.Sesion(sesion);
      if(obtener==null){
        alert("Usuario y contraseña invalidos")
      }
      else{
        guardarSesion(await obtener);
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
        titulo="Correo"
        value={sesion.email_usuario}
        onChangeText={(text) => 
          onChangeValue("email_usuario",text)
        }
        enabled={habilitado}
        primaryIcon="email"
      />
      <InputTextComponente
        titulo="Contraseña"
        value={sesion.pass_usuario}
        onChangeText={(text) => 
          onChangeValue("pass_usuario",text)
        }
        enabled={habilitado}
        secureTextEntry={true} 
        primaryIcon="eye"
        secundaryIcon="eye-off"
      />
      <Button mode="contained" 
        onPress={inciarSesion}>
        Iniciar Sesión
      </Button>
    </ScrollView>
  );
}