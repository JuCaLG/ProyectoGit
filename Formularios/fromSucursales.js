import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StatusBar, ScrollView,Image} from 'react-native'
import { mainStyles,loginStyles} from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/colors'
import {gql,useMutation} from '@apollo/client';





export default function formSucursales(props) {

 
  


  const NUEVA_SUCURSAL =gql`
  mutation nuevaSucursal ($input: SucursalInput){
    nuevaSucursal (input: $input)}
    `;

  //UseMutation
  const[nuevaSucursal] = useMutation(NUEVA_SUCURSAL);
  //this.props.navigation.navigate('Principal');


 



  //const [nombre, setNombre] = useState('')
  const[nombre,guardarNombre]= useState('')
    
  //const [rfc, setRFC] = useState('')
  const[rfc,guardarRFC]= useState('')

  //const [direccion, setDireccion] = useState('')
  const[direccion,guardarDireccion]= useState('')

  //const [telefono, setTelefono] = useState('')
  const[telefono,guardarTelefono]= useState('')

  //const [email, setEmail] = useState('')

  const[email,guardarEmail]= useState('')





  


  const handleSubmit = async ()=>{

        

    //Validar
    if(nombre ==''|| rfc==''|| direccion==''||telefono ==''|| email==''){
        alert("Todos los campos son requeridos")
    }else {
        alert("Sucursal registrada")
        /*
        guardarNombre('')
        guardarDireccion('')
        guardarEmail('')
        guardarRFC('')
        guardarTelefono('')
        */
        console.log("Aqui hay algo")

        try{

          const { data } =await nuevaSucursal ({
            variables: {
              input: {
                nombre,
                rfc,
                telefono,
                direccion,
                email                
              }
              
            }

            

                        
           } );
           
         //console.log( data)
         console.log(nuevaSucursal)

        }catch (error) {
          console.log("Aqui hay algo3")
         
          console.log (error);
        }
    }
    

}

const cerrarSucusal =() => {
  props.navigation.navigate('Home')

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
      <Text style={{fontWeight: 'bold',fontSize: 18,marginTop: 20}}>INE</Text>
      <View style={[loginStyles.logo]}>
              <Image source={require('@recursos/images/camara.png')} style={{height:250, width:250}}/>
          </View>
       
        
      
      <View style={mainStyles.btnMain}>
        <TouchableOpacity  onPress={() => handleSubmit()}>
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
