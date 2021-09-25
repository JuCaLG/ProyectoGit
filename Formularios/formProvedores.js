import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StatusBar, ScrollView,Image} from 'react-native'
import { mainStyles,loginStyles} from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/colors'

/*
    Importar codigo para peticion con el servidor
*/
const peticion = require('../__PeticionServidor/peticiones.servidor');

export default function formProvedores(props) {

    const[inputNombre,guardarNombre]= useState('')
    const[inputRFC,guardarRFC]= useState('')
    const[inputDireccion,guardarDireccion]= useState('')
    const[inputTelefono,guardarTelefono]= useState('')
    const[inputEmail,guardarEmail]= useState('')

    function limpiarInputs() {
      guardarNombre('');
      guardarDireccion('');
      guardarEmail('');
      guardarRFC('');
      guardarTelefono('');
  }

  const crearProveedor = async () => {
    //Validar
    if(inputNombre ==''|| 
        inputRFC==''|| 
        inputDireccion==''|| 
        inputTelefono ==''|| 
        inputEmail==''
      ){
        alert("Todos los campos son requeridos");
    }else{
      var body = {
        "name_prov": inputNombre,
        "rfc_prov": inputRFC,
        "dir_prov": inputDireccion,
        "tel_prov": inputTelefono,
        "email_prov": inputEmail,
        "img_prov": "",
      };
      const resultado = await peticion.insertar("proveedor",body);
      alert(resultado.status);
      limpiarInputs();
    }

  }

  const cerrarProveedor =() => {
    props.navigation.navigate('Home')

  }

  return (
    <ScrollView
      keyboardDismissMode='on-drag'
      keyboardShouldPersistTaps='always'
      style={{ backgroundColor: color.WHITE }}>
      <StatusBar backgroundColor={color.BLUE} translucent={true} />

      <View style={[mainStyles.container, { padding: 50 }]}>
        <Text style={mainStyles.titleText}> Provedores</Text>
        <MyTextInput placeholder='Nombre' image='user'
        value={inputNombre} onChangeText={nombre => guardarNombre (nombre)} />

        <MyTextInput placeholder='RFC' image='slack'
        value={inputRFC} onChangeText={rfc => guardarRFC (rfc)} />

        <MyTextInput placeholder='Dirección' image='home' 
        value={inputDireccion} onChangeText={direccion => guardarDireccion (direccion)}/>

        <MyTextInput placeholder='Telefono' image='phone' 
        value={inputTelefono} onChangeText={telefono => guardarTelefono (telefono)}/>

        <MyTextInput placeholder='Email' image='envelope' 
        value={inputEmail} onChangeText={email => guardarEmail (email)}/>

        <Text style={{fontWeight: 'bold',fontSize: 18,marginTop: 20}}>Foto</Text>
        <View style={[loginStyles.logo]}>
          <Image source={require('@recursos/images/camara.png')} style={{height:250, width:250}}/>
        </View>

        <View style={mainStyles.btnMain}>
          <TouchableOpacity onPress={() =>crearProveedor()}>
            <Text style={mainStyles.btntxt}>Agregar</Text>
          </TouchableOpacity>
        </View>

        <View style={mainStyles.btnMain}>
          <TouchableOpacity onPress={() =>cerrarProveedor ()}>
            <Text style={mainStyles.btntxt}>Cancelar</Text>
          </TouchableOpacity>
        </View>


      </View>
    </ScrollView>
  )
}
