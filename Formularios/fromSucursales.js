import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StatusBar, ScrollView,Image} from 'react-native'
import { mainStyles,loginStyles} from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/colors'
import {gql,useMutation} from '@apollo/client';

/*
    Importar codigo para peticion con el servidor
*/
const peticion = require('../__PeticionServidor/peticiones.servidor');

export default function formSucursales(props) {

  const[nombre,guardarNombre]= useState('')
  const[rfc,guardarRFC]= useState('')
  const[direccion,guardarDireccion]= useState('')
  const[telefono,guardarTelefono]= useState('')
  const[email,guardarEmail]= useState('')

function limpiarInputs() {
  guardarNombre('');
  guardarDireccion('');
  guardarEmail('');
  guardarRFC('');
  guardarTelefono('');
}

  const crearSucursal = async () => {
    //Validar
    if(nombre ==''||
      rfc==''|| 
      direccion==''||
      telefono ==''|| 
      email==''){
        alert("Todos los campos son requeridos");
    }else{
      var body = {
        "nombre": nombre,
        "rfc": rfc,
        "telefono": telefono,
        "direccion": direccion,
        "email": email,
      };
      const resultado = await peticion.insertar("sucursal",body);
      alert(resultado.status);
      limpiarInputs();
    }
  }

  const cerrarSucusal =() => {
    props.navigation.goBack();
  }

  return (
    <ScrollView
      keyboardDismissMode='on-drag'
      keyboardShouldPersistTaps='always'
      style={{ backgroundColor: color.WHITE }}>
      <StatusBar backgroundColor={color.BLUE} translucent={true} />

      <View style={[mainStyles.container, { padding: 50 }]}>
        <Text style={mainStyles.titleText}>Sucursales</Text>
    
        <MyTextInput placeholder='Nombre' image='user'
        value={nombre} onChangeText={texto => guardarNombre (texto)} />

        <MyTextInput placeholder='RFC' image='slack'
        value={rfc} onChangeText={texto => guardarRFC (texto)} />

        <MyTextInput placeholder='Dirección' image='home' 
        value={direccion} onChangeText={texto => guardarDireccion (texto)}/>

        <MyTextInput placeholder='Telefono' image='phone' 
        value={telefono} onChangeText={texto => guardarTelefono (texto)}/>

        <MyTextInput placeholder='Email' image='envelope' 
        value={email} onChangeText={texto => guardarEmail (texto)}/>

        <View style={mainStyles.btnMain}>
          <TouchableOpacity  onPress={() => crearSucursal()}>
            <Text style={mainStyles.btntxt}  >Agregar</Text>
          </TouchableOpacity>
        </View>

        <View style={mainStyles.btnMain}>
          <TouchableOpacity  onPress={() => cerrarSucusal()}>
            <Text style={mainStyles.btntxt}>Cancelar</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  )

}
