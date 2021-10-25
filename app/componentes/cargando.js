import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {ActivityIndicator} from 'react-native';
import { Dimensions } from 'react-native';
import {mainStyles} from '../estilos/styles';

const Cargando = ({setCargar}) => {
    return (
        <View style={{
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10,
            position: "absolute",
            }}>
            <View style={{
                    paddingVertical:12,
                    paddingHorizontal:20,
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'rgba(0,0,0,0.6)',
                    borderRadius:6,
                    }}>
                <ActivityIndicator animating={true} size="large" color="white"/>
                <Text style={{
                            marginLeft:20,
                            fontSize:14,
                            color:"white",
                            }}>
                    Cargando ...
                </Text>
                {
                    (setCargar!=undefined) ?
                    (
                    <TouchableOpacity onPress={() => setCargar(false)}>
                        <Text style={mainStyles.btntxt}>Cerrar</Text>
                    </TouchableOpacity>
                    ):
                    (<></>)
                }
            </View>
        </View>
    );
}

export default Cargando;