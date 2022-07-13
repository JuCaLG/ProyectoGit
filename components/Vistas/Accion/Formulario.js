import React, { useState, useEffect } from 'react';
import { View, Text, BackHandler } from 'react-native';
import { Title } from 'react-native-paper';
import { useBackHandler } from '@react-native-community/hooks';
//Componentes
import ConstruirFormulario from '../../Componentes/ConstruirFormulario';
//Modelo
import EstructuraForm from '../../Modelo/EstructuraForm';
import Modelo from '../../Modelo/Modelo';
//Encabezados
import EncabezadoFormulario from '../../Encabezados/EncabezadoFormulario';
//Metodos
import PreticionCRUD from '../../Metodos/PeticionCRUD';

export default function Formulario({ route, navigation }) {
  //Variables
  const [formulario, setFormulario] = useState([]);
  const [id, setId] = useState(null);
  const [objeto, setObjeto] = useState({});
  const [tablaListar, setTablaListar] = useState("");
  const [accion, setAccion] = useState("Vacio");
  const [habilitado, setHabilitado] = useState(true);
  const TipFormulario = {
    Vacio: {
      regreso: null,
      accion: '',
      icono: '',
      evento: null,
    },
    Agregar: {
      regreso: () => navigation.navigate("Listar", { tabla: tablaListar }),
      accion: 'Agregar',
      icono: 'content-save',
      evento: (id,objeto,tabla) => agregarObjeto(objeto,tabla),
    },
    Consultar: {
      regreso: () => navigation.navigate("Listar",{ tabla: tablaListar }),
      accion: 'Consultar',
      icono: 'square-edit-outline',
      evento: () => {
        setAccion('Modificar');
        setHabilitado(true);
      },
    },
    Modificar: {
      regreso: () => {
        setHabilitado(false);
        setAccion('Consultar');
      },
      accion: 'Modificar',
      icono: 'content-save-edit',
      evento: (id,objeto,tabla) => modificarObjeto(id, objeto,tabla),
    },
  };

  //useBackHandler
  useBackHandler(() => {
    TipFormulario[accion].regreso();
    return true;
  });
  //Effects
  useEffect(() => {
    setTablaListar(
      route.params != null &&
        route.params.tabla !== null &&
        route.params.tabla !== undefined
        ? route.params.tabla
        : tablaListar
    );
    setAccion(
      route.params != null &&
        route.params.accion !== null &&
        route.params.accion !== undefined
        ? route.params.accion
        : accion
    );
    setId(
      route.params != null &&
        route.params.id !== null &&
        route.params.id !== undefined
        ? route.params.id
        : null
    );
  }, [route]);

  useEffect(() => {
    const estructura =
      EstructuraForm[tablaListar] != null &&
      EstructuraForm[tablaListar] !== undefined
        ? EstructuraForm[tablaListar]
        : null;
    setHabilitado((accion!="Consultar")? true:false);
    setFormulario(estructura);
  }, [accion,tablaListar]);

  useEffect(() => {
    id!=null && consultarObjeto(id,tablaListar);
  }
  ,[id,tablaListar]);

  useEffect(() => {
    navigation.setOptions(
      EncabezadoFormulario(
        TipFormulario[accion].regreso,
        TipFormulario[accion].accion,
        TipFormulario[accion].icono,
        () => TipFormulario[accion].evento(id,objeto,tablaListar)
      )
    );
  }, [objeto, tablaListar, accion, id]);
  //Metodos
  const agregarObjeto = async (objeto,tabla) => {
    setHabilitado(false);
    const agregar = await PreticionCRUD.AgregarObjeto(tabla, objeto);
    alert(
      agregar != null
        ? JSON.stringify(agregar) /* && navigation.navigate("Listar") */
        : 'Hay, Dificultad para conectarse con el servidor'
    );
    setHabilitado(true);
  };
  const modificarObjeto = async (id, objeto, tabla) => {
    setHabilitado(false);
    const modificar = await PreticionCRUD.ModificarObjeto(
      tabla,
      id,
      objeto
    );
    alert(
      modificar != null
        ? JSON.stringify(modificar) /* && navigation.navigate("Listar") */
        : 'Hay, Dificultad para conectarse con el servidor'
    );
    setHabilitado(true);
  };
  const consultarObjeto = async (id, tabla) => {
    const obj = await PreticionCRUD.ConsultarObjeto(tabla,id);
    setObjeto(obj != null ? obj : {});
  };
  //Vista
  return (
    <View>
      {(accion==="" || tablaListar==="")?
        (<Title> Cargando ... </Title>):
        (
          <View>
            <Title> {tablaListar.toUpperCase()} </Title>
            <ConstruirFormulario
              habilitado={habilitado}
              formulario={formulario}
              state={objeto}
              setState={setObjeto}
            />
          </View>
        )
      }
    </View>
  );
}
