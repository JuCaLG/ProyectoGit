import React, { useState } from "react";
import { Text, View, TouchableOpacity, Button ,StatusBar, ScrollView } from 'react-native';
import { mainStyles } from '../../estilos/styles';
import color from '../../estilos/colors';

const PedidosListar = ({navigation}) => {

    const [listaPedido,setListaPedido] = useState([
        {
            "_id":1,
            "nombre": "pedido1",
        },
        {
            "_id":2,
            "nombre": "pedid2",
        },
    ]);

    const siguientePag = (Pagina, Parametro) =>{
        if(Parametro==undefined){
            navigation.navigate(Pagina);
        }
        else{
            navigation.navigate(Pagina, Parametro);
        }
    }

    const Listar = () => {
        return listaPedido.map((data) => {
            return (
                <TouchableOpacity key={data._id} onPress={() => siguientePag("PedidosVer",{"id": data._id})}>
                    <Text style={mainStyles.titleLista}>{data.nombre}</Text>
                </TouchableOpacity>
            );
        });


    }
    
    return (
        <View>
            <ScrollView
                keyboardDismissMode='on-drag'
                keyboardShouldPersistTaps='always'
                style={{ backgroundColor: color.WHITE }}>
                <StatusBar backgroundColor={color.BLUE} translucent={true} />

                <View style={[mainStyles.container, { padding: 40 }]}>
                    <Text style={mainStyles.titleText}> Pedidos </Text>

                    <View >
                        {Listar()}
                    </View>

                    <View style={mainStyles.btnMain}>
                        <TouchableOpacity onPress={() => siguientePag("Home")}>
                            <Text style={mainStyles.btntxt}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={mainStyles.btnMain}>
                        <TouchableOpacity onPress={() => siguientePag("PedidosAgregar")}>
                            <Text style={mainStyles.btntxt}>+</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

export default PedidosListar;