import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StatusBar, ScrollView,Image} from 'react-native'
import { mainStyles,loginStyles} from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/colors'

function goToScreen(props, routeName) {
  props.navigation.navigate(routeName)
}

export default function formProvedores(props) {


  const [nombre, setNombre] = useState('')
    const[inputNombre,guardarNombre]= useState('')
    
    const [rfc, setRFC] = useState('')
    const[inputRFC,guardarRFC]= useState('')

    const [direccion, setDireccion] = useState('')
    const[inputDireccion,guardarDireccion]= useState('')

    const [telefono, setTelefono] = useState('')
    const[inputTelefono,guardarTelefono]= useState('')

    const [email, setEmail] = useState('')
    const[inputEmail,guardarEmail]= useState('')


  const crearProveedor = ()=>{

        

    //Validar
    if(inputNombre ==''|| inputRFC==''|| inputDireccion==''||inputTelefono ==''|| inputEmail==''){
        alert("Todos los campos son requeridos")
    }else{
        alert("Proveedor registrado")
        guardarNombre('')
        guardarDireccion('')
        guardarEmail('')
        guardarRFC('')
        guardarTelefono('')
    }
    //UseMutation
    //const[] = useMutation();
    //this.props.navigation.navigate('Principal');

}

const cerrarProveedor =() => {
    

}


  return (
    <ScrollView
      keyboardDismissMode='on-drag'
      keyboardShouldPersistTaps='always'
      style={{ backgroundColor: color.WHITE }}>
      <StatusBar backgroundColor={color.BLUE} translucent={true} />

      <View style={[mainStyles.container, { padding: 50 }]}>
        <Text style={mainStyles.titleText}>Sucurcales</Text>
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
        <Text style={{fontWeight: 'bold',fontSize: 18,marginTop: 20}}>INE</Text>
        <View style={[loginStyles.logo]}>
                <Image source={require('@recursos/images/camara.png')} style={{height:250, width:250}}/>
            </View>
         
          
        
        <View style={mainStyles.btnMain}>
          <TouchableOpacity>
            <Text style={mainStyles.btntxt}>Agregar</Text>
          </TouchableOpacity>
        </View>

        <View style={mainStyles.btnMain}>
          <TouchableOpacity>
            
            <Text style={mainStyles.btntxt}>Cancelar</Text>
          </TouchableOpacity>
        </View>


      </View>
    </ScrollView>
  )
}
