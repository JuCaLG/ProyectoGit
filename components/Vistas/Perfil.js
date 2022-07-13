import React, { useState, useEffect } from 'react';
import { ScrollView, Text, BackHandler } from 'react-native';
import { Title } from 'react-native-paper';
import { useBackHandler } from '@react-native-community/hooks';
//Componentes
import ConstruirFormulario from '../Componentes/ConstruirFormulario';
//Modelo
import EstructuraForm from '../Modelo/EstructuraForm';
import Modelo from '../Modelo/Modelo';
//Encabezados
import EncabezadoFormulario from '../Encabezados/EncabezadoFormulario';
//Metodos
import PreticionCRUD from '../Metodos/PeticionCRUD';

export default function Formulario({ sesion, route, navigation, guardarSesion }) {
  //Variables
  const [formulario, setFormulario] = useState([]);
  const [objeto, setObjeto] = useState({...sesion});
  const [accion, setAccion] = useState("Perfil");
  const [habilitado, setHabilitado] = useState(true);
  const TipFormulario = {
    Perfil: {
      regreso: () => navigation.goBack(),
      accion: 'Perfil',
      icono: 'square-edit-outline',
      evento: () => {
        setAccion('Modificar');
        setHabilitado(true);
      },
    },
    Modificar: {
      regreso: () => {
        setHabilitado(false);
        setAccion('Perfil');
      },
      accion: 'Modificar',
      icono: 'content-save-edit',
      evento: (objeto) => modificarObjeto(objeto),
    },
  };

  //useBackHandler
  useBackHandler(() => {
    TipFormulario[accion].regreso();
    return true;
  });
  //Effects
  useEffect(() => {
    const estructura = EstructuraForm["usuarios"]
    setHabilitado((accion!="Perfil")? true:false);
    setFormulario(estructura);
  }, [accion]);

  useEffect(() => {
    navigation.setOptions(
      EncabezadoFormulario(
        TipFormulario[accion].regreso,
        TipFormulario[accion].accion,
        TipFormulario[accion].icono,
        () => TipFormulario[accion].evento(objeto)
      )
    );
  }, [objeto, accion]);
  //Metodos
  const modificarObjeto = async (objeto) => {
    setHabilitado(false);
    const modificar = await PreticionCRUD.ModificarObjeto(
      "usuarios",
      objeto._id,
      objeto
    );
    let alerta = 'Hay, Dificultad para conectarse con el servidor';
    if(modificar != null){
      alerta = modificar
    }
    alert(alerta);
    setHabilitado(true);
  };
  //Vista
  return (
    <ScrollView>
      <Text> {objeto._id} </Text>
      <ConstruirFormulario
        habilitado={habilitado}
        formulario={formulario}
        state={objeto}
        setState={setObjeto}
      />
    </ScrollView>
  );
}