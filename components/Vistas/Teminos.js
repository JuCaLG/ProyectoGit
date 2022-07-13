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

export default function Sesion({sesion, guardarSesion}){
  //Variables
  const [ aux, setAux ] = useState({...sesion, terminosYCondiciones: true });

  const aceptar = async() => {
    let modificar = await PreticionCRUD.ModificarObjeto("usuarios", 
      aux._id , 
      aux
    );
    if(modificar != null){
      guardarSesion(aux);
      alert(modificar);
    }
    else{
      alert('Hay, Dificultad para conectarse con el servidor')
    }
  }
  //Vista
  return (
    <ScrollView>
      <Button mode="contained" 
        onPress={aceptar}>
        Aceptar
      </Button>
    </ScrollView>
  );
}