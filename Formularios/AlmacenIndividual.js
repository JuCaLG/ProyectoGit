import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import { ListItem, List } from 'react-native-elements'
import { mainStyles } from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/colors'
import { gql, useMutation } from '@apollo/client';







export default function AlmacenIndividual(props, navigation) {

    const [hidePassword, setHidePassword] = useState(false)

    const [categoria, setCategoria] = useState('')
    const [inputCategoria, guardarCategoria] = useState('')
    const{suc}=props.route.params;
    console.log(props.route.params.suc)

    const cerrarLista = ()=>{
        props.navigation.navigate('Home')
    }
   
    const atrasLista = ()=>{
      //  props.navigation.navigate('ListSucursal')
    }

    const DetalleLista = (suc)=>{
        props.navigation.navigate('DetalleCategoria',{suc:suc})
    }

    





    return (
        <ScrollView
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='always'
            style={{ backgroundColor: color.WHITE }}>
            <StatusBar backgroundColor={color.BLUE} translucent={true} />

            <View style={[mainStyles.container, { padding: 32 }]}>
                <Text style={mainStyles.titleDetalleLista}> Almacen de</Text>
                <Text style={mainStyles.titleDetalleSuc}> {suc}</Text>
                <Text>Producto     StockD         Existencias      Surtir</Text>



                <Text> Caja calibre 8 in         45             15                   30                          </Text>
                <Text> Caja calibre 10 in        32             18                   14                    </Text>
                <Text> Caja calibre 12 in        70             70                   0                    </Text>
                <Text> Caja calibre 14 in        85             80                   5                      </Text>


                           
                

                <View style={mainStyles.btnMain}>

                    <TouchableOpacity onPress={() => atrasLista()}>
                        <Text style={mainStyles.btntxt}>Surtir</Text>
                    </TouchableOpacity>
                </View>

                <View style={mainStyles.btnMain}>

                    <TouchableOpacity onPress={() => cerrarLista()}>
                        <Text style={mainStyles.btntxt}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
                

                


            </View>
        </ScrollView>
    )

    function goTosecreen(routeName) {
        props.navigation.navigate(routeName)

    }
}