import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import { mainStyles} from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/colors'
import {gql, useMutation} from '@apollo/client';



function goToScreen(props, routeName) {
    props.navigation.navigate(routeName)
}




export default function formCategorias(props,navigation) {

    const [hidePassword, setHidePassword] = useState(false)

    const [categoria, setCategoria] = useState('')
    const[inputCategoria,guardarCategoria]= useState('')
    
    

   

    const crearCategoria = ()=>{

        

        //Validar
        if(inputCategoria ==''){
            alert("Llenado incompleto")
        }else{
            alert("Categoría registrada")
            guardarCategoria('')
        }
        //UseMutation
        //const[] = useMutation();
        //this.props.navigation.navigate('Principal');

    }

    const cerrarCategoria =() => {
        

    }

    return (
        <ScrollView
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='always'
            style={{ backgroundColor: color.WHITE }}>
            <StatusBar backgroundColor={color.BLUE} translucent={true} />
    
            <View style={[mainStyles.container, { padding: 50 }]}>
                <Text style={mainStyles.titleText}> Categorias</Text>
                <MyTextInput placeholder='Nombre' image='sitemap'
                value={inputCategoria} onChangeText={categoria => guardarCategoria (categoria)} />


                
                <View style={mainStyles.btnMain}>
                    <TouchableOpacity onPress={() => crearCategoria()}>
                        <Text style={mainStyles.btntxt}>Guardar</Text>
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

    function goTosecreen(routeName){
        props.navigation.navigate(routeName)
    
    }
}