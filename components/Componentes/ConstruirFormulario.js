import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { HelperText, TextInput, Button, Caption } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
//Componente
import SwitchInputsComponente from './SwitchInputs';
//Metodos
import PreticionCRUD from '../Metodos/PeticionCRUD';

const ConstruirFormulario = ({ formulario, state, setState, habilitado }) => {
  //Eventos
  const onChangeValue = (nombre, value) => {
    setState({ ...state, [nombre]: value });
  };

  const onChangeValuePicker = (nombre, value) => {
    
    const newValue = (value==="")? "":value;
    setState({ ...state, [nombre]: newValue });
  };

  const evento = (tipo) => {
    return (
      (tipo==="picker")? 
        onChangeValuePicker:
        onChangeValue
    );
  }
  //Vista
  return (
    <FlatList
      data={formulario}
      renderItem={({item,index})=> 
        <Input
          habilitado={habilitado}
          item={item} 
          index={index}
          value={state[item.nombre]}
          evento={(value) => onChangeValue(item.nombre,value) }/>}
    />
  );
};

//ComponenteAdicional
const Input = ({item,index, evento,value, habilitado}) => {
  //Variables
  const [data, setData] = useState([]);
  //Effects
  useEffect(() => {
    if(item.type=="picker"){
      obtenerDatos(item.tabla);
    }
  }, [item]);
  //Metodos
  const obtenerDatos = async (tabla) => {
    const obtener = await PreticionCRUD.ListarTabla(tabla);
    setData(obtener);
  };
  return (
    <SwitchInputsComponente 
      type={item.type}
      titulo={item.titulo}
      value={value}
      data={data}
      enabled={habilitado}
      onEvent={evento}
    />
  )
}

export default ConstruirFormulario;