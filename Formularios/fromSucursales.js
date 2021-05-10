import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StatusBar, ScrollView,Image} from 'react-native'
import { mainStyles,loginStyles} from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/colors'

function goToScreen(props, routeName) {
  props.navigation.navigate(routeName)
}

export default function formProvedores(props) {

  return (
    <ScrollView
      keyboardDismissMode='on-drag'
      keyboardShouldPersistTaps='always'
      style={{ backgroundColor: color.WHITE }}>
      <StatusBar backgroundColor={color.BLUE} translucent={true} />

      <View style={[mainStyles.container, { padding: 50 }]}>
        <Text style={mainStyles.titleText}>Sucurcales</Text>
        <MyTextInput placeholder='Nombre' image='user' />
        <MyTextInput placeholder='RFC' image='slack' />
        <MyTextInput placeholder='Dirección' image='home' />
        <MyTextInput placeholder='Telefono' image='phone' />
        <MyTextInput placeholder='Email' image='envelope' />
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
