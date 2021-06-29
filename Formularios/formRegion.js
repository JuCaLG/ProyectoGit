import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import { mainStyles} from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/colors'
import {gql, useMutation} from '@apollo/client';



function goToScreen(props, routeName) {
    props.navigation.navigate(routeName)
}




export default function formRegiones(props,navigation) {

    const [hidePassword, setHidePassword] = useState(false)

    const [region, setRegion] = useState('')
    const[inputRegion,guardarRegion]= useState('')
    
    

   

    const crearRegion = ()=>{

        

        //Validar
        if(inputRegion ==''){
            alert("Llenado incompleto")
        }else{
            alert("Región registrada")
            guardarRegion('')
        }
        //UseMutation
        //const[] = useMutation();
        //this.props.navigation.navigate('Principal');

    }

    const cerrarRegion =() => {
        props.navigation.navigate('ListCategorias')

    }

    return (
        <ScrollView
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='always'
            style={{ backgroundColor: color.WHITE }}>
            <StatusBar backgroundColor={color.BLUE} translucent={true} />
    
            <View style={[mainStyles.container, { padding: 50 }]}>
                <Text style={mainStyles.titleText}> Region</Text>
                <MyTextInput placeholder='Nombre' image='sitemap'
                value={inputRegion} onChangeText={region => guardarRegion(region)} />


                
                <View style={mainStyles.btnMain}>
                    <TouchableOpacity onPress={() => crearRegion()}>
                        <Text style={mainStyles.btntxt}>Guardar</Text>
                    </TouchableOpacity>
                </View>

                <View style={mainStyles.btnMain}>

                    <TouchableOpacity onPress={() => cerrarRegion()}>
                        <Text style={mainStyles.btntxt}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
                
                
            </View>
        </ScrollView>
    )

    function goTosecreen(routeName){
        props.navigation.navigate(routeName)
    
    }
}