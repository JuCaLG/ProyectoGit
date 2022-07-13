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

export default function Sesion(){
  
  const [lista, setLista] = useState();
  const [consulta, setconsulta] = useState();
  const [result, setResult] = useState();
  const id = "62c9ff7a3a39427f7c9fb1fc" ;
  
  const Agregar = async () => {
    setResult(
      await PreticionCRUD.AgregarObjeto(
        "categorias", {"nom_categoria":"gggg","des_categoria":"prubaAxios"})
    )
  }
  const Modificar = async () => {
    setResult(
      await PreticionCRUD.ModificarObjeto(
        "categorias", id, {"nom_categoria":"ttttt","des_categoria":"prubaAxios"})
    )
  }
  const Eliminar = async () => {
    setResult(
      await PreticionCRUD.EliminarObjeto(
        "categorias", id)
    );
  }
  const Consultar = async () => {
    setconsulta(
      await PreticionCRUD.ConsultarObjeto("categorias", id)
    );
  }
  const Listar = async () => {
    setLista(
      await PreticionCRUD.ListarTabla("categorias")
    );
  }
  //Vista
  return (
    <ScrollView>
      <Text>     </Text>
      <Text>     </Text>
      <Text>     </Text>
      <Button mode="contained" 
        onPress={Agregar}>
        Agregar
      </Button>
      <Button mode="contained" 
        onPress={Modificar}>
        Modificar
      </Button>
      <Button mode="contained" 
        onPress={Eliminar}>
        Eliminar
      </Button>
      <Button mode="contained" 
        onPress={Consultar}>
        Consultar
      </Button>
      <Button mode="contained" 
        onPress={Listar}>
        Listar
      </Button>
      <Text> { JSON.stringify(result) } </Text>
      <Text> { JSON.stringify(consulta) } </Text>
      <Text> { JSON.stringify(lista) } </Text>
    </ScrollView>
  );
}