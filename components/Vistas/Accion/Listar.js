import React, { useState, useEffect } from 'react';
import { useBackHandler } from '@react-native-community/hooks';
import {
  View,
  RefreshControl,
  BackHandler,
  Text,
  TouchableOpacity,
  Button,
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native';
import { IconButton } from 'react-native-paper';
//Encabezados
import EncabezadoListar from "../../Encabezados/EncabezadoListar";
import EncabezadoSeleccionar from "../../Encabezados/EncabezadoSeleccionar";
//Componentes
import Lista from '../../Componentes/Lista';
//Metodos
import PreticionCRUD from '../../Metodos/PeticionCRUD';
import vacio from "../../Metodos/vacio";

export default function Listar({ route, navigation }) {
  //Variables
  const [tablaListar, setTablaListar] = useState(null);
  const [data, setData] = useState(undefined);
  const [dataCheckbox, setDataCheckbox] = useState({});
  const [refrescar, setRefrescar] = useState(false);
  //useBackHandler
  useBackHandler(() => {
    (JSON.stringify(dataCheckbox) === '{}')? 
      navigation.goBack():
      setDataCheckbox({});
    return true;
  })
  //effects
  useEffect(() => {
    setTablaListar(
      route.params != null &&
        route.params.tabla !== null &&
        route.params.tabla !== undefined
        ? route.params.tabla
        : tablaListar
    );
  }, [route]);
  
  useEffect(() => {
    tablaListar!=null && obtenerDatos(tablaListar);
  }, [route,tablaListar]);

  useEffect(() => {
    const opciones = (
      (JSON.stringify(dataCheckbox) === '{}')?
      EncabezadoListar(navigation,
        vacio.esNulo(tablaListar)? "": tablaListar.replace("_", " ")):
      EncabezadoSeleccionar(
        ""+Object.keys(dataCheckbox).length,
        () => eliminarDatos(tablaListar),
        () => setDataCheckbox({})
      )
    );
    navigation.setOptions(opciones);
  }, [dataCheckbox,data]);
  //Peticion
  const obtenerDatos = async (tabla) => {
    const obtener = await PreticionCRUD.ListarTabla(tabla);
    setData(obtener);
  };
  const eliminarDatos = async (tabla) => {
    for(var id in dataCheckbox) {
      alert(JSON.stringify(
        await PreticionCRUD.EliminarObjeto(tabla,id)
      ));
    }
    setDataCheckbox({})
    obtenerDatos(tablaListar);
  };
  const refreshControl = ((JSON.stringify(dataCheckbox)==='{}') &&
      <RefreshControl 
          refreshing={refrescar} 
          onRefresh={() => obtenerDatos(tablaListar) } />)

  //Eventos
  const onLongPress = (index) => {
    if(dataCheckbox[index]===undefined){
      setDataCheckbox({
        ...dataCheckbox, [index]: true
      });
    }
    else{
      const copia = {...dataCheckbox}
      delete  copia[index];
      setDataCheckbox(copia);
    }
  }
  const onPress = (index) => {
    if(JSON.stringify(dataCheckbox)==='{}'){
      navigation.navigate("Formulario",
        { 
          tabla: tablaListar,
          id: index,
          accion: "Consultar"
        }
      );
    }
    else{
      onLongPress(index);
    }
  }
  const onInsertar = () => {
    navigation.navigate("Formulario",
      { 
        tabla: tablaListar,
        id: null,
        accion: "Agregar"
      }
    );
  }
  //Elemento
  const elemento = () => {
    switch(data){
      case undefined:
        return (
          <Text>
            Cargando...
          </Text>
        );
      break;
      case null:
        return (
          <Text>
            Lo sentimos ocurrio un error, por favor contacte con el desarrollador.
          </Text>
        );
      break;
      default:
        return (
          <View
            style={{
              height: '100%',
              backgroundColor: 'white',
            }}>
            { (vacio.verificarArray(data) )?
              (
                <Lista
                  data={data}
                  keyExtractor={(item,index) => item._id}
                  dataCheckbox={dataCheckbox}
                  onLongPress={onLongPress}
                  onPress={onPress}
                  refreshControl={refreshControl}
                />
              ):
              (
                <ScrollView
                  refreshControl={
                    refreshControl
                  }>
                  <Text>
                    No hay Datos
                  </Text>
                </ScrollView>
              )
            }
            <IconButton
              onPress={onInsertar}
              style={botonFlotante.fab}
              size={40}
              color="white"
              icon="plus"
            />
          </View>
        )
      break;
    }
  }
  //Vista
  return (
    <>
      {Platform.OS === 'web' && (
        <Text style={{ backgroundColor: 'yellow' }}>
          Instalar Moesif Origin & CORS Changer en el navegador para que
          funcione correctamente{' '}
        </Text>
      )}
      {elemento()}
    </>
  );

}

const botonFlotante = StyleSheet.create({
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#03A9F4',
    borderRadius: 30,
    elevation: 0,
  },
});
